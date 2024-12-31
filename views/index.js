const createHomePageTemplate = () => /* html */ `
    <!DOCTYPE html>
    <html>
        <head>
        <title>My Reading List</title>
        <script src="https://unpkg.com/htmx.org@2.0.4" 
                integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" 
                crossorigin="anonymous">
        </script>
        <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
        <header>
            <h1>My Reading List</h1>
        </header>

        <main>
            <center>
                <div class="search" style="text-align:center">
                    <input 
                    type="search"
                    name="search"
                    placeholder="Search books by title...."
                    hx-post="/books/search"
                    hx-trigger="keyup changed delay:300ms"
                    hx-target=".book-list"
                    >
                    <input 
                    type="search"
                    name="search"
                    placeholder="Search books by author...."
                    hx-post="/author/search"
                    hx-trigger="keyup changed delay:300ms"
                    hx-target=".book-list"
                    >
                </div>
            </center>
                
            <div class="book-list">
                <button hx-get="/books" hx-target=".book-list" >Show Books</button>
            </div>

            <div class="add-book-form">
            <h2>What do you want to read?</h2>
                <form
                    hx-post="/books" 
                    hx-on::after-request="document.querySelector('form').reset()"
                    hx-target=".book-list ul" 
                    hx-swap="beforeend"
                >
                    <input 
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                    >
                    <input 
                        type="text"
                        name="author"
                        placeholder="Author"
                        required
                    >
                    <button>
                            Add Book
                    </button>
                </form>
            </div>
        </main>
        </body>
    </html>
`;

export default createHomePageTemplate;