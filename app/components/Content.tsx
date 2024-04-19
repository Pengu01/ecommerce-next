import React from "react";

const Content = () => {
    return (
        <>  
        <div className="flex gap-20 flex-col my-20">
            <div className="flex justify-center w-full h-[30vh] text-[--rmain-color] flex-col">
                <p className="text-8xl m-auto">Stoltz Industries</p>
                <p className="text-4xl m-auto">Indie clothing store</p>
            </div>
            <div className="flex h-[80vh] w-full text-[--rmain-color] text-2xl justify-between">
                <img src="https://fashinza.com/textile/wp-content/uploads/2021/12/shutterstock_778298764-1-1.jpg" />
                <div className="flex flex-col gap-2 m-10">
                <p className="text-4xl">Reinventing fashion.</p>
                <p>We have quality clothes made by quality people
                    and we believe in the power of individual.
                    We don't follow trends,
                    we create them. Our mission is to make  
                    a difference through our designs that 
                    are not only stylish but also sustainable  
                    and ethical.
                    </p>
                    </div>
            </div>
        </div>
        </>

    );
};

export default Content;
