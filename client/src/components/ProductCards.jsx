import React from 'react'

function ProductCards({ title }) {

    let cards = [{
        name: "something",
        desc: "some",
        score: "50",
        price: "$30",
        img: "https://source.unsplash.com/200x200/?tree"

    }, {
        name: "something",
        desc: "some",
        score: "90",
        price: "$30",
        img: "https://source.unsplash.com/200x200/?tree"

    }, {
        name: "something",
        desc: "some",
        score: "10",
        price: "$30",
        img: "https://source.unsplash.com/200x200/?tree"

    }]

    return (
        <div>
            <div id="title">
                <h3>{title}</h3>
            </div>
            <div id='container' style={{ border: "solid 2px red", height: "30vh", display: "flex", }}>
                {
                    cards.map((card) => {
                        return <div style={{ border: "solid 2px red", height: "30vh" }}>
                            <img src={card.img} alt="" />
                            <img src={card.score > 60 ? "./images/point_gold.png" : card.score > 40 ? "./images/point_silver.png" : "./images/point_bronze.png"} alt="" />
                            <h2>
                                {card.name}
                            </h2>
                            <p>
                                {card.desc}
                                {card.price}
                            </p>

                            <div id="buttons">
                                <button>Buy</button>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductCards