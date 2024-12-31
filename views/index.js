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
            <div class="book-list">
            <!-- book list here later -->
            </div>

            <div class="add-book-form">
            <h2>What do you want to read?</h2>
            <!-- form template here later -->
            </div>
        </main>
        </body>
    </html>
`;

export default createHomePageTemplate;