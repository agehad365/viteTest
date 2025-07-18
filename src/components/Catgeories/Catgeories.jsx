 import Slider from "react-slick";
import Spinner from '../Spinner/Spinner';
import useApi from '../../hooks/useApi';
import {Helmet} from "react-helmet";
 
 
export default function Categories() {
  const { data, isLoading } = useApi('categories');

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Category page</title>
      </Helmet>

      <div className="container mx-auto px-4">
  <h1 className="text-3xl font-bold text-green-600   text-center m-15  fw-bold">Categories </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data?.data?.data.map((category) => (
      <div
        key={category._id}
        className="bg-white border rounded-lg p-3 transition-all duration-500 shadow hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] hover:-translate-y-1 hover:scale-[1.03] cursor-pointer"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 object-cover rounded-md mb-3 transition-all duration-500"
        />
        <h3 className="text-lg font-semibold text-center">{category.name}</h3>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

//       var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//      responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//  function getallcategories(){

//    axios.get(`https://ecommerce.routemisr.com/api/v1/category`).then(({data})=>{
//     console.log(data?.data);
//     setCategories(data?.data);

    
//    }).catch((error)=>{
//     console.log(error);
    
//    })

//  }

//     useEffect(()=>{
// getallcategories()

//     },[])

    //  <div className='my-3'> 
    //   <h2 className='text-xl font-medium'>shop popular now</h2>
    //    <Slider {...settings} >

    //     {categories.map((category)=>{  return <div>
    //        <img className=' h-[200px]' src={category?.image} alt={category?.name} />
    //        <h3>{category?.name}</h3>
           
    //         </div>})}

       
    //    </Slider>
    //  </div>
   
 
 