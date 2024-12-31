const createEditTemplate = (book) => /* html */ `
    <form
        hx-put="/books/${book.id}" 
        hx-target="closest li"
        hx-swap="outerHTML"
    >
        <input 
            type="text"
            name="title"
            placeholder="Title"
            required
            value="${book.title}"
        >
        <input 
            type="text"
            name="author"
            placeholder="Author"
            required
            value="${book.author}"
        >
        <button>
                Confirm
        </button>
    </form>
`;


export default createEditTemplate;