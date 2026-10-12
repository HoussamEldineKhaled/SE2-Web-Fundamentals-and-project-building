// Mock API function (simulates real movie database)
function searchMovies(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate different scenarios
            if (!query) {
                reject(new Error("Search query is required"));
            } else if (query.length < 3) {
                reject(new Error("Query must be at least 3 characters"));
            } else {
                // Return mock movie data
                resolve([
                    { id: 1, title: "The Matrix", year: 1999, rating: 8.7 },
                    { id: 2, title: "Inception", year: 2010, rating: 8.8 },
                    { id: 3, title: "Interstellar", year: 2014, rating: 8.6 }
                ]);
            }
        }, 1000); // 1 second delay
    });
}

function getMovieDetails(movieId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movies = {
                1: { 
                    id: 1, 
                    title: "The Matrix", 
                    director: "The Wachowskis",
                    cast: ["Keanu Reeves", "Laurence Fishburne"]
                },
                2: { 
                    id: 2, 
                    title: "Inception", 
                    director: "Christopher Nolan",
                    cast: ["Leonardo DiCaprio", "Tom Hardy"]
                },
                3: { 
                    id: 3, 
                    title: "Interstellar", 
                    director: "Christopher Nolan",
                    cast: ["Matthew McConaughey", "Anne Hathaway"]
                }
            };
            
            if (movies[movieId]) {
                resolve(movies[movieId]);
            } else {
                reject(new Error("Movie not found"));
            }
        }, 800);
    });
}




// Feature 1: Search for movies (with error handling)
async function searchForMovies(query) {
    try {
        console.log(`Searching for: "${query}"`);
        // TODO: Implement search with loading state
        // TODO: Handle errors gracefully
        // TODO: Return search results
        const data = await searchMovies(query)
        console.log(`Found ${data.length} movies`)
        return data
    } catch (error) {
        // TODO: Show user-friendly error message
        console.error(`Error: ${error}`)
        return []
    }
}

// Feature 2: Load multiple movie details in parallel
async function loadMovieDetails(movieIds) {
    try {
        console.log(`Loading details for ${movieIds.length} movies...`);
        // TODO: Use Promise.all() to load all details at once
        const promises = movieIds.map((id) => getMovieDetails(id))
        const details= await Promise.all(promises)
        // TODO: Return array of movie details
        return details
        
    } catch (error) {
        // TODO: Handle errors
        console.error(`Error: ${error}`)
        return []

    }
}

// Feature 3: Search with timeout (prevent hanging)
async function searchWithTimeout(query, timeoutMs = 3000) {
    try {
        // TODO: Use Promise.race() to add timeout
        // TODO: If timeout occurs, show appropriate message
        const result = await Promise.race([searchForMovies(query), new Promise((_, reject) => setTimeout(() => reject(new Error('Request Timeout')), timeoutMs))])
        return result
    } catch (error) {
        // TODO: Handle both timeout and search errors
        console.error(`Error: ${error}`)
        return []
    }
}








// Main function that demonstrates all features
async function movieDatabaseDemo() {
    console.log("=== Movie Database Demo ===\n");
    
    // Test 1: Basic search
    console.log("Test 1: Basic Search");
    await searchForMovies("matrix");
    
    // Test 2: Search with error
    console.log("\nTest 2: Search Error");
    await searchForMovies(""); // Should show error
    
    // Test 3: Parallel loading
    console.log("\nTest 3: Parallel Loading");
    await loadMovieDetails([1, 2, 3]);
    
    // Test 4: Search with timeout
    console.log("\nTest 4: Search with Timeout");
    await searchWithTimeout("inception", 500); // Will timeout
    
    console.log("\n=== Demo Complete ===");
}

// Run the demo
movieDatabaseDemo();