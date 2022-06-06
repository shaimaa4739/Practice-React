import React, {  useState }    from "react";
import { Card, Container,Tabs,Tab,Sonnet} from "react-bootstrap";

export default function Products(props) {
    const productItems = [
        

        { 
            title: 'Neckouls',
            image: 'https://ae01.alicdn.com/kf/Hb94478ed8f744c83be0744c30d453479h/EN-Vintage-Multi-Layered-Lock-Chain-Necklace-2021-Girls-Necklace-Geometric-Link-Chains-Women-Female-Fashion.jpg_Q90.jpg_.webp',
            price: 'EGP 15000',
            category: 'laptop'
        },    {
            title: 'Rings',
            image: 'https://cdn.shopify.com/s/files/1/2541/1566/products/boho-beach-hut-rings-4-8-silver-8-pc-bohemian-retro-style-ring-set-23215042691267.jpg?v=1628157865',
            price: 'EGP 200',
            category: 'laptop'
        },{
            title: 'Bracelet',
            image: 'https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fyaou2.yadeou.cn%2F%2Ftupian7%2FPEC91231002_1009494844313670843.jpg',
            price: 'EGP 5000',
            category: 'laptop'
        },
        {
            title: 'High Waisted Skirt',
            image: 'https://tristanstore-120f.kxcdn.com/tristan_store/images_produits/FV080C1509Z_BE50_1.jpg?width=395&height=593',
            price: 'EGP 700',
            category: 'clothes'
        },
        {
            title: 'Drak Skirt',
            image: 'https://romans-cdn.rlab.net/images/extralarge/ca7572f4-e2b7-4dc8-8b5f-ee18b0d86c77.jpg',
            price: 'EGP 500',
            category: 'clothes'
        },
        {
            title: 'Roman Original',
            image: 'https://romans-cdn.rlab.net/images/extralarge/867a31f0-1921-433a-84aa-466f16955dca.jpg',
            price: 'EGP 2,000',
        
            category: 'clothes'
        },
        

        ,{
            title: 'C++ Advanced Book',
            image: 'https://www.codespot.org/assets/books/explorations-in-computing.jpg',
            price: 'EGP 8900',
            category: 'tvs'
        },

        ,{
            title: 'Java Language Book',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51U+wj5BbKL._SX331_BO1,204,203,200_.jpg',
            price: 'EGP 4000',
            category: 'tvs'
        },
        ,{
            title: 'Javascript Book',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51uHIlBzfFL._SX331_BO1,204,203,200_.jpg',
            price: 'EGP 15000',
            category: 'tvs'
        },
    ]

    let [productList, setProductList] = useState(productItems)
    const [key, setKey] = useState('all');
    let FilterProduct = (k) => {
        if(k=='all'){
            setProductList(productItems);
        }else{
            const filtered = productItems.filter(item => item.category == k);
            setKey(k)
            setProductList(filtered)
            console.log(productList);
        }
    }

    return (
        <>
        <Container className="mt-5">
            <Tabs 
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => FilterProduct(k)} className="mb-3">

                <Tab eventKey="all" title="all" className=" bg-warning">
                </Tab>
                <Tab eventKey="clothes" title="Skirts">
                </Tab>
                <Tab eventKey="laptop" title="Accessories">
                </Tab>
                <Tab eventKey="tvs" title="Books">
                </Tab>
            </Tabs>
        </Container>
        

            <Container className="my-5 m-auto">
                <div className="row m-5">
                {
                    productList.map((item)=>{
                    return(
                        <Container className=" col-md-4 mt-4 ">
                            <Card className="shadow-lg p-3 mb-5 bg-dark" >
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                <Card.Title className="largeText text-light" >{item.title}</Card.Title>
                                <Card.Text className="smallText">
                                {item.details}
                                </Card.Text>
                                <Card.Text className="addv">
                                    <div>{item.price}</div>
                                    <div className="float-right "><button class=" rounded btn btn-warning font-weight-bold text-dark" role="button"><h6>+</h6></button></div>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                        )})
                    }
                </div>
            </Container>
        </>
    )
}