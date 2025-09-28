import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utills/constants";
import { addItem } from "../utills/cartSlice";
const ItemList =({items , dummy}) =>{

    const dispatch = useDispatch();

    const handleAddItem =(item)=>{
        //dispatch an action

        dispatch(addItem(item));
        
    };


    //console.log(items);
    return ( 
    <div >
         {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                   <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 flex justify-center ">
                <img src={IMG_CDN_URL + item.card.info.imageId}  className="w-32 h-28 object-cover rounded-md"/>
                <div className="absolute pt-20 ">
                <button className="p-2 bg-pink-100 shadow-lg mx-20 rounded-lg "
                onClick={() => handleAddItem(item)}>
                    Add+
                    </button>
                </div>
                </div>
            </div>
        ))}
    </div>
     );
};

export default ItemList;