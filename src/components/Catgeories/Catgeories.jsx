 import Slider from "react-slick";
import Spinner from '../Spinner/Spinner';
import useApi from '../../hooks/useApi';
import {Helmet} from "react-helmet";
 
  export default function Categories() {
  
let{data,isLoading}=useApi('categories')
console.log(data,isLoading);


if(isLoading){
  return <Spinner/>
}
    

   return (
        <>
         <Helmet>
        <title>
          Category page
        </title>
      </Helmet>
      
<div>Category
   <ul>
      {data?.data?.data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
</div>
  </>
)
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
   
 
 