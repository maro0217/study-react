
export const fetcher = async (url) => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("データの取得に失敗")
    }
    const json = await response.json()
    return json;
  }