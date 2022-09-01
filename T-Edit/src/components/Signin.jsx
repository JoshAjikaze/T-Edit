const Signin = () => {
    return ( 
        <div className="flex flex-col items-center justify-center b min-w-[100%] min-h-[50vh] md:hidden">

                <h1 className="font-thin text-[20px]">SIGN IN</h1>
                <h5>Create an account with us now!</h5>
                <form action="#" className="w-[90%] flex flex-col border-[1px] space-y-[20px]">
                    <input type="text" placeholder="Username" className="w-[100%] h-[70px] border-sky-500 border-[2px] rounded-[35px] text-center focus:outline-none" />
                    <input type="password" placeholder="Password" className="w-[100%] h-[70px] border-sky-500 border-[2px] rounded-[35px] text-center focus:outline-none" />
                    <button className="w-[100%] h-[70px] border-sky-500 border-[1px] rounded-[35px] text-white bg-sky-500 font-bold">Sign In</button>
                </form>
            </div>
     );
}
 
export default Signin;