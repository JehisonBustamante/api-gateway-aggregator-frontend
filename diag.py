import httpx
import asyncio
import json

async def check_apis():
    CITY_NAME = "Santiago"
    
    print("--- Testing wttr.in ---")
    try:
        url = f"https://wttr.in/{CITY_NAME}?format=j1"
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(url)
            print(f"Status: {response.status_code}")
            if response.status_code == 200:
                data = response.json()
                if "data" in data:
                    current = data["data"]["current_condition"][0]
                    print(f"Condition: {current['weatherDesc'][0]['value']}")
                    print(f"Temp: {current['temp_C']}°C")
                else:
                    print("Key 'data' not in response!")
                    print("Keys found:", data.keys())
            else:
                print("Failed to fetch wttr.in")
    except Exception as e:
        print(f"wttr.in Error: {e}")

    print("\n--- Testing Google News RSS ---")
    NEWS_RSS_URL = "https://news.google.com/rss/search?q=Santiago%20Chile&hl=es-419&gl=CL&ceid=CL:es-419"
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(NEWS_RSS_URL, headers={"User-Agent": "Mozilla/5.0"}, follow_redirects=True)
            print(f"RSS Status: {response.status_code}")
            if response.status_code == 200:
                print(f"RSS Content-Length: {len(response.text)}")
                print(f"Preview: {response.text[:200]}...")
            else:
                print("Failed to fetch Google News RSS")
    except Exception as e:
        print(f"News RSS Error: {e}")

if __name__ == "__main__":
    asyncio.run(check_apis())
