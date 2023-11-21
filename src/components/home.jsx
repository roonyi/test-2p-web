import { Flex, Box, Button, Slider } from 'monday-ui-react-core';
import React, { useState, useRef } from "react";
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-bootstrap/Carousel';

export const Home = (props) => {
    console.log("props.header", props.header)
    // Constant for the Carousels
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };
    
      const viewRef = {
        menu: useRef(),
        footer: useRef(),
        products: useRef()
    };

    const scrollCallBack = (view) => {
        viewRef[view]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const HomeIntro = (props) => {
/*        let intros = props.content?.intro.component?.elements
        console.log("intros: ", intros)
        console.log ("intros: ", Object.keys(intros))
        Object.keys(intros).map((key) => {
            if (intros[key].render !== 'Asset'){
                console.log("intros_right: ", intros[key].render)
            }else {
                console.log("intros_left: ", intros[key].render)
            }
        })  */
        console.log("props.content?.intro_left.component?.elements: ", props.content?.intro_left.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-intro'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid
                    >
                    <Row >    
                        <Col sm="5" 
                        className={'ni-layout-home-intro-left'}
                         >                            
                                <Flex
                                gap={Flex.gaps.LARGE}
                                // className={'ni-layout-home-intro-left'}
                                direction={Flex.directions.COLUMN}>      
                                    <WebContent info={props.content?.intro_left.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>
                                </Flex>
                        </Col>
                        <Col >
                            <Flex
                                gap={Flex.gaps.MEDIUM}
                                // className={'ni-layout-home-intro-right'}
                                direction={Flex.directions.COLUMN}>   
                                <WebContent info={props.content?.intro_right.component?.elements} contentClassName={'ni-layout-home-intro-title-img'}/>    
                            </Flex>
                        </Col>
                    </Row>    
                </Container>
            </Flex>
        );
    };

    const HomeApproach_title = (props) => {
        console.log("props.content?.approach_title.component?.elements: ", props.content?.approach_title.component?.elements)
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid>
                    <Col>
                        <WebContent info={props.content?.approach_title.component?.elements} contentClassName={'ni-layout-home-approach-title-text'}/>
                    </Col>
                </Container>    
            </Flex>
        );
    };

    const HomeApproach_cards = (props) => {
        console.log("props.content?.approach_cards.component?.elements: r1 ", props.content?.approach_cards.component?.elements)
        
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-card-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid
                    align={Flex.justify.CENTER}
                    >
                    {/* <Carousel>                        
                       {props.content?.approach_cards.component?.elements?.map((element) => {
                        let card_content0 = element.content.split("##");
                        return(
                        <Carousel.Item>
                            <div className='card' style={{height: '300px', width:'200px'}}>
                                            <img src= {element.files[0]} className={`ni-layout-card-image`}/>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{card_content0[0]}</h5>
                                                <h6 className='card-text'>{card_content0[1]}</h6>
                                            </div>
                            </div>
                        </Carousel.Item> 
                        )
                            })}
                    </Carousel> */}
                    {console.log('element_cards1',props.content?.approach_cards.component?.elements, props.content?.approach_cards.component?.elements.length)}
                    {props.content?.approach_cards.component?.elements && 
                    <Carousel 
                    responsive={responsive}
                    infinite={true}
                    // autoPlay={true}
                    // autoPlaySpeed={3000}
                    arrows={true}
                    showDots={true}
                    // sliderClass={'carousel'}
                    containerClass={'carousel-container'}
                    dotListClass={'carousel-dotlist'}
                    // renderDotsOutside={true}
                    // removeArrowOnDeviceType={["desktop", "mobile", "tablet" ]}
                    // customLeftArrow={'<'}
                    >
                        {
                        props.content?.approach_cards.component?.elements?.map((element) => {
                        let elementArray = [element];
                        return (<WebContent info={elementArray} alterClassHint={'card'}/>)
                            })
                        }
                    </Carousel>}
                </Container>
            </Flex>
        );
    };

    const HomeProducts = (props) => {
        console.log("props.content?.products_title.component?.elements: ", props.content?.products_title.component?.elements)
        return (
            <Flex  
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL}
                >
                <Container fluid
                align={Flex.justify.CENTER}
                >
                        <Row >   
                            <Col>
                                <WebContent info={props.content?.products_title.component?.elements} contentClassName={'ni-layout-home-products-title'}/>
                            </Col>
                            <WebContent info={props.content?.products.component?.elements} alterClassHint={'card'}/>
                        </Row>
                </Container>
            </Flex>
        );
    };

    return (
        //(props.home === undefined) ? 
            //<Messenger message={'loader'} /> :
            //console.log("prop.header", props.header)
            // <Container 
            // className={'ni-layout-home'}
            // >
            <Flex 
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-general'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <Container fluid
                >
                <Row >   
                    <HeaderMenu refProps={viewRef.menu} scrollCallBack={scrollCallBack} content={props.header} />
                    <HomeIntro content={props.home} />
                    <HomeApproach_title content={props.home} />
                    <HomeApproach_cards content={props.home} />
                    <HomeProducts refProps={viewRef.products} scrollCallBack={scrollCallBack} content={props.home} />
                    <FooterMenu refProps={viewRef.footer} scrollCallBack={scrollCallBack} content={props.footer} />
                </Row>
                </Container> 
            </Flex>
    );
}

export default Home;