
export const Layout = (props) => {
    return (
        <div className="flex flex-col items-center mx-auto max-w-2xl px-2 min-h-screen">
            {props.children}
        </div>
        )
}

//     min-height: 100vh;
//   padding: 0 0.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 80%;
//   margin: 0 auto;