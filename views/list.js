import createBookTemplate from "./book.js";

const createBooksList = (books) => /* html */ `
    <ul>
        ${books.map((book) => createBookTemplate(book)).join('')}
    </ul>
`;

export default createBooksList;