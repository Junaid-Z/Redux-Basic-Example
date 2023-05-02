import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";

function ProductPage(props) {
	let [cards, setCards] = useState([]);
	let [limit, setLimit] = useState(20);
	let [loading, setLoading] = useState(true);
	// const cart = useSelector((state) => { return state.cart })
	const dispatch = useDispatch()
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products/")
			.then((response) => {
				console.log(response.data)
				setCards(response.data);
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				console.log(err)
			})
	}, [])
	return (
		<div className="productsContainer">
			{
				loading ? <div >Loading</div> :
					<>
						<div className="row">
							{
								cards.map((v, i) => {
									if (i < limit) {
										return (
											<div className="productCard" key={v.id}>
												<div className="imageHolder">
													<img src={v.image} alt="" />
												</div>
												<h3>{v.title}</h3>
												<div className="price">Price: {v.price}$</div>
												<div className="description">{v.description}</div>
												<div className="rating">Rating: {v.rating.rate}</div>
												<div key={i} data={{ title: v.id, info: v.title, imageLink: v.thumbnailUrl }} />
												<div>
													<button onClick={() => { dispatch(addToCart({ item: v })) }}>Add To Cart</button>
													<button onClick={() => { dispatch(removeFromCart({ item: v })) }}>Remove From Cart</button>
												</div>
											</div>
										)
									}
									return undefined;
								})
							}
						</div>
						<div className="loadMore">
							<button
								onClick={() => {
									setLimit((prev) => { return prev + 20 })
								}} >Load More</button>
						</div>
						<Link to={'/cart'}>Go to cart</Link>
					</>
			}
		</div>
	)
}
export default ProductPage;
