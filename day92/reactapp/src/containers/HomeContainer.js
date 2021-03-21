import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/index";

const mapStateToProps = (state) => ({
  cartData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
