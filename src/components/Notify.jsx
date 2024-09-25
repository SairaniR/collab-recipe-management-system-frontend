function Notify({ type, message }) {
    return <>
        <div className={`text-center p-5 mt-4 mb-4 shadow-xl border ${type === 'success' ? "border-green-600 bg-green-100" : type === 'error' ? "border-red-600 bg-red-100" : type === 'info' ? "border-blue-600 bg-blue-100" : ""}`}>
            {message}
        </div>
    </>
}

export default Notify;