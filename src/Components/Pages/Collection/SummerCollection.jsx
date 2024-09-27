import Card from "../../Cards/Card";
import '../../Shared/text.css'
const SummerCollection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-md text-gray-400">Summer Collection</h1>
         <div className="content">
            <h2 className="  font-sand">Best Seles Dress</h2>
            <h2 className="  font-sand">Best Seles Dress</h2>
         </div>
      </div>
      <Card/>
    </div>
  );
};

export default SummerCollection;
