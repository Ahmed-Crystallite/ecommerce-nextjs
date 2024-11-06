import Link from "next/link";

const NotFound = () => {
    return (
        <main>
            <section>
                <div className="h-screen flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-black font-bold !leading-tight">Oops.....</h1>
                        <h2 className="text-4xl sm:text-5xl xl:text-6xl text-black font-bold !leading-tight">404 Page Not Found</h2>
                        <Link href="/" className="inline-block text-lg bg-yellow-500 text-black py-3 px-10 mt-5 rounded-lg font-medium transition-all ease-in-out duration-300 hover:bg-opacity-50">Back To Home</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFound;