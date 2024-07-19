import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { projects } from '../../data/projects';
import { FaAngleRight } from "react-icons/fa";

const CardSlider = () => {

    const truncate = (text, length) => {
        if (text.length <= length) {
          return text;
        }
        return text.slice(12, length) + '...';
      };

            return (
                <div className='py-2 px-3'>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  freeMode={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[FreeMode, Autoplay]}
                  className='w-full'
                >
                  {projects.map(project => (
                    <SwiperSlide key={project.id}>
                      <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg border-[1px] border-richblack-7 mx-auto">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-49 object-cover "
                        />
                        <CardContent className="p-6 space-y-4 bg-richblack-1 bg-opacity-10 backdrop-blur-sm">
                          <div>
                            <CardTitle className="text-xl font-semibold text-richblack-2">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-richblack-3">
                              {truncate(project.description, 100)}
                            </CardDescription>
                            {project.description.length > 200 && (
                              <Link
                                href={project.demoLink}
                                className="text-sm font-medium text-primary hover:underline"
                              >
                                Read More
                              </Link>
                            )}
                          </div>
                          <Link
                            href={project.demoLink}
                            className="inline-flex h-9 items-center bg-richblack-10 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-richblack-5 border-[1px] border-richblack-5  shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            prefetch={false}
                          >
                            View Project <FaAngleRight className='text-richblack-1' size={20}/>
                          </Link>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          );
        };
        
        const Card = ({ children, className }) => (
          <div className={className}>
            {children}
          </div>
        );
        
        const CardContent = ({ children, className }) => (
          <div className={className}>
            {children}
          </div>
        );
        
        const CardTitle = ({ children, className }) => (
          <h3 className={className}>
            {children}
          </h3>
        );
        
        const CardDescription = ({ children, className }) => (
          <p className={className}>
            {children}
          </p>
        );
        
        const Link = ({ href, children, className, prefetch }) => (
          <a href={href} className={className}>
            {children}
          </a>
        );
    


export default CardSlider;

// mx-8 neumorphisum_bg my-4
       
            // <div className="max-w-sm bg-richblack-10 bg-opacity-10 backdrop-blur-md rounded-lg shadow border-[1px] border-richblack-8">

            //     <img className="rounded-t-lg" src={image} alt={title} />

            //     <div className="p-5">
            //         <a href={demoLink}>
            //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
            //         </a>
            //         <p className="mb-3 font-normal text-richblack-4">{description}</p>

            //         {/* Buttons */}
            //         <div className='flex items-center justify-between'>
            //             <a href={demoLink} target="_blank" rel="noopener noreferrer"
            //                 className="inline-flex items-center px-3 py-2 gap-2 text-sm font-semibold text-center text-white bg-[#1b4332] rounded-lg hover:bg-[#143326] focus:ring-2 focus:outline-none focus:ring-[#214b39] ">
            //                 Get Demo
            //                 <FaArrowUpRightFromSquare size={15} />
            //             </a>
            //         </div>
            //     </div>
            // </div>