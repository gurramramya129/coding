const fetchData = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`https://api.example.com/items?page=${page}`);
      const data = await response.json();
  
      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };