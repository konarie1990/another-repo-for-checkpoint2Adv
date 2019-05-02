import { connect } from "react-redux";
import CatList from "../components/CatList";
import { deleteCat } from "../actions";

const mapStateToProps = store => {
  return {
    cats: store.cats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCat: model => dispatch(deleteCat(model))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatList);
