// src/app/api/newsdata/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'agriculture';
    const page = searchParams.get('page') || undefined;

    const API_KEY = process.env.NEWSDATA_API;
    if (!API_KEY) {
      console.error('Missing NEWSDATA_API environment variable');
      return NextResponse.json({ 
        error: 'API configuration error',
        articles: []
      }, { status: 500 });
    }

    console.log('🌾 Fetching farmer news with query:', category);

    // Build the NewsData.io API URL
    const url = new URL('https://newsdata.io/api/1/latest');
    url.searchParams.set('apikey', API_KEY);
    
    // Handle complex search queries for farmer news
    if (category.includes('OR')) {
      // For complex queries like "agriculture OR farming OR crops"
      url.searchParams.set('q', category);
    } else {
      // For simple single-word categories
      url.searchParams.set('category', category);
    }
    
    url.searchParams.set('country', 'in');
    url.searchParams.set('language', 'en');
    url.searchParams.set('size', '10'); // Limit results per page
    
    if (page) {
      url.searchParams.set('page', page);
    }

    console.log('📡 API URL:', url.toString().replace(API_KEY, 'HIDDEN_KEY'));

    const apiRes = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'FarmerNewsApp/1.0',
      },
    });

    const body = await apiRes.text();
    console.log('📄 Response status:', apiRes.status);

    if (!apiRes.ok) {
      console.error('🗞️ NewsData API error:', apiRes.status, body);
      
      // Handle specific error cases
      if (apiRes.status === 429) {
        return NextResponse.json({ 
          error: 'Rate limit exceeded. Please try again later.',
          articles: []
        }, { status: 429 });
      }
      
      if (apiRes.status === 401) {
        return NextResponse.json({ 
          error: 'Invalid API key',
          articles: []
        }, { status: 401 });
      }

      return NextResponse.json({ 
        error: `NewsData API error: ${apiRes.status}`,
        articles: []
      }, { status: 502 });
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (parseError) {
      console.error('Failed to parse API response:', parseError);
      return NextResponse.json({ 
        error: 'Invalid response from news service',
        articles: []
      }, { status: 502 });
    }

    console.log('📊 Raw data structure:', {
      status: data.status,
      totalResults: data.totalResults,
      resultsCount: data.results?.length || 0,
      nextPage: data.nextPage
    });

    // Handle NewsData.io response structure
    const results = data.results || [];
    
    const articles = results
      .filter((r: any) => {
        // Filter out articles without essential data
        return r.title && 
               r.title !== '[Removed]' && 
               r.link && 
               r.description;
      })
      .map((r: any) => ({
        title: r.title || 'No Title',
        description: r.description || 'No description available',
        url: r.link,
        urlToImage: r.image_url || null,
        publishedAt: r.pubDate || new Date().toISOString(),
        source: {
          name: r.source_id || 'Unknown Source'
        }
      }));

    console.log('✅ Processed articles:', articles.length);

    return NextResponse.json({
      status: 'success',
      totalResults: data.totalResults || articles.length,
      nextPage: data.nextPage || null,
      articles,
    });

  } catch (e: any) {
    console.error('🔥 /api/newsdata unexpected error:', e);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? e.message : undefined,
      articles: []
    }, { status: 500 });
  }
}