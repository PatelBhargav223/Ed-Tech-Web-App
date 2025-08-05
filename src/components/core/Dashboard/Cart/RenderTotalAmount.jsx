import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BuyCourse } from "../../../../services/operations/studentFeaturesAPI";

function RenderTotalAmount() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = async () => {
    const courses = cart.map((course) => course._id);
    try {
      await BuyCourse(token, courses, user, navigate, dispatch);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleBuyCourse}
        className="rounded-[8px] bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900"
      >
        Pay Now
      </button>
    </div>
  );
}

export default RenderTotalAmount;
