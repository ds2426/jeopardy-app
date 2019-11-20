import { useEffect, useState} from 'react';

function useAsyncHook(options) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState("false");
  
    useEffect(() => {
      async function fetchCategories() {
        try {
          setLoading("true");
          const response = await fetch(options.url);
          const json = await response.json();
          setResult(
            json.map(item => {
              return item;
            })
          );
        } catch (error) {
          setLoading("null");
        }
      }
  
      if (options.url) {
        fetchCategories();
      }
    }, [options.url]);
  
    return [result, loading];
  }

  export default useAsyncHook;