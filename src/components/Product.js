
function Product( { title } ) {
    return (
        <div className="p-10 border-blue-700 border m-5 flex justify-between">
            <p> { title } </p>

            <button className="p-4 bg-red-500 rounded-2xl focus:outline-none focus:ring-2 ring-red-800 hover:bg-red-300"> Add to basket </button>
        </div>
    )
}

export default Product;
