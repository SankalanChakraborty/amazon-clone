export const prodOptions = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': 'a2402449a1mshd1cd855fc7eac37p14e14cjsnd3f7cd98063f',
      'X-RapidAPI-Key': '7f8f1d1a9amshbb2b62305acfaa7p137143jsn235840de533c',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    }
};

export const fetchProducts = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}