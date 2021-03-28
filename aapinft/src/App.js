import React, { useReducer, useRef, useState,useEffect } from "react";
import "./index.css";
import ScriptTag from 'react-script-tag';
import Web3 from "web3"

import aapi1 from "./images/aapi1.png"
import aapi2 from "./images/aapi2.png"
import aapi3 from "./images/aapi3.png"
import aapi4 from "./images/aapi4.png"
import aapi5 from "./images/aapi5.png"
import mas from "./images/mas.png"
import quant from "./images/quant.png"
import stopasian from "./images/stopasian.jpeg"
import twit from "./images/twit.png"
import tel from "./images/tel.png"
import ins from "./images/ins.png"
import AAPI from "./images/Artists/AAPI.NFT.png"
import David from "./images/Artists/David Nam.png"
import Lucy from "./images/Artists/Lucy Wang.png"
import Jenn from "./images/Artists/Jennifer Kim.png"
import Sak from "./images/Artists/SAKURA.png"
import Jake from "./images/Artists/Jake Huy.png"

import ReactGA from 'react-ga';


function reducer(state, action) {
  switch (action.type) {
    case 'HOME':
      return 0;
    case 'COLLECTION':
      return 1;
    case 'SUPPORT':
      return 2;
    case 'PARTNERS':
      return 3;
    default:
      return state;
  }
}

function App() {

  useEffect(() => {
    ReactGA.initialize("UA-167979880-1")
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);


  const firstList = [
    {
      title: "FOX EYE",
      content: `Yes I have fox eye. 
      But no reasons to be insulted.`,
      img:stopasian,
      drawn:"Drawn by Lucyh Wang",
      url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59345103804510908063408009946767618438349379765466021588333484308312602181633"
    },
    {
      title: "ASIAN STEREOTYPE",
      content: `Look at him. That’s my quant. Look at his face!! 
      Look at this eyes. His name is Yang. 
      He doesn’t even speak English! - Big Short -`,
      img:quant,
      drawn:"Drawn by AAPI.NFT",
      url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59345103804510908063408009946767618438349379765466021588333484309412113809409"
    },
    {
      title: "MASSACRE",
      content: " Inspired by Myanmar Democracy, Georgia Atalanta Hate crime. Is it blood? Or rose blossom?",
      img:mas,
      drawn:"Drawn by Min Maw Tun",
      url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59345103804510908063408009946767618438349379765466021588333484310511625437185"
    },
  ]
  const artistList=[
    {
      img:AAPI
    },
    {
      img:Lucy
    },
    {
      img:Jenn
    },
    {
      img:Sak
    },
    {
      img:Jake
    },
    {
      img:David
    },
  ]
  const thanksList = [
    {
      add: "0xasasdasdsaasddkasdkqkw",
      amount: "0.1 ETH"
    },
    {
      add: "0xasasdasdsaasddkasdkqkw",
      amount: "0.1 ETH"
    }
    ,
    {
      add: "0xasasdasdsaasddkasdkqkw",
      amount: "0.1 ETH"
    }
    ,
    {
      add: "0xasasdasdsaasddkasdkqkw",
      amount: "0.1 ETH"
    }
  ]
  const homeRef = useRef(null)
  const homeScroll = () => homeRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const collectionRef = useRef(null)
  const collectionScroll = () => collectionRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const supportRef = useRef(null)
  const supportScroll = () => supportRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const partnersRef = useRef(null)
  const partnersScroll = () => partnersRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const [category, dispatch] = useReducer(reducer, 0);
  const home = () => {
    dispatch({ type: "HOME" })
    homeScroll()
  }
  const collection = () => {
    dispatch({ type: "COLLECTION" })
    collectionScroll()
  }
  const support = () => {
    dispatch({ type: "SUPPORT" })
    supportScroll()
  }
  const partners = () => {
    dispatch({ type: "PARTNERS" })
    partnersScroll()
  }
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const { name, nickname } = inputs
  const onChange = (e) => {
    const { name, value } = e.target
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs)
  }

  function donation() {
    var MY_ADDRESS = '0x8A39eC10AE914CD71DE75A766D7Beb78C1286D0e'
    if (window.ethereum) {
      var web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts((error, accounts) => {
            web3.eth.sendTransaction(
              {
                to: MY_ADDRESS,
                from: accounts[0],
                value: Web3.utils.toWei(name, 'ether'),
              },
            )
          })
        });
      } catch (e) {
        console.log("Fuck")
      }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      var web3 = new Web3(window.web3.currentProvider);
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts((error, accounts) => {
            web3.eth.sendTransaction(
              {
                to: MY_ADDRESS,
                from: accounts[0],
                value: Web3.utils.toWei(name, 'ether'),
              },
            )
          })
        });
      } catch (e) {
        console.log("Fuck")
      }
    }
    else {
      alert('You have to install MetaMask !');
    }
    if (typeof web3 === 'undefined') {
      console.log("error")
    }


  }

  useEffect(()=>{
    console.log("gi")
  })
function gethash(){

}
  return (
    <div style={{
      width: 1920,
      backgroundColor: "#ffffff",
      zIndex: 0,
      position: "relative",
    }}>
      <div style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: 1280,
        paddingLeft: 200,
        paddingRight: 320,
        paddingTop: 16,
        paddingBottom: 16,
        height: 48,
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 5px 0 rgba(38, 37, 37, 0.12)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <div style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#e5bf78",
          alignSelf: "flex-end"
        }}>AAPI.NFT</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
        }}>
          <div onClick={home} style={{
            fontSize: 20,
            fontWeight: category === 0 ? "bold" : "normal",
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Home</div>
          <div onClick={collection} style={{
            fontSize: 20,
            fontWeight: category === 1 ? "bold" : "normal",
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Collection</div>
          <div onClick={support} style={{
            fontSize: 20,
            fontWeight: category === 2 ? "bold" : "normal",
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Support us</div>
          <div onClick={partners} style={{
            fontSize: 20,
            fontWeight: category === 3 ? "bold" : "normal",
            color: "#000000",
            cursor: "pointer",
            marginRight: 40
          }}>Artists</div>
         <a href={"https://twitter.com/AapiNft"} target="_blank" >
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20
            }} src={twit}></img></div> 
            </a>
          <a href={"https://www.instagram.com/aapi.nft/"} target="_blank">
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20
            }} src={ins}></img>
          </div>
          </a>
          <a href={"https://t.me/aapinft"} target="_blank">
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20
            }} src={tel}></img>   
          </div>
          </a>
        </div>
      </div>
      <div style={{
        width: 1280,
        backgroundColor: "#ffffff",
        paddingLeft: 320,
        paddingRight: 320,
        marginTop: 200,
        display: "flex",
        flexDirection: "column",
      }}>
        <div ref={homeRef} style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: 510,
          }}>
            <div style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
              lineHeight: 1.69
            }}>EMPORING STOP AAPI HATE THROUGH NFT ARTWORKS</div>
            <div style={{
              fontSize: 18,
              opacity: 0.8,
              color: "#000000",
              lineHeight: 1.56,
              marginBottom: 40,
            }}>AAPI.NFT makes NFT Artworks inspired by your stories.
              Recently we’ve been discriminated and  terror by
              COVID-19, Atalanta Massacre.
            <br /> <br />
            But is this a new phenomenon?
            We’ve been suffered by Asian Stereotype, treated as strangers, feels like we don’t belong anywhere.
            Stop saying CHING CHANG CHONG SHIT to us. </div>
            <div style={{
              cursor: "pointer",
              backgroundColor: "#e6bf78",
              borderRadius: 8,
              width: 290,
              marginBottom: 20,
              paddingTop: 20,
              paddingBottom: 20,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeo1t9c2r07Uxnd-ZjPT19_rxzuZr6a96NYwUim0a_f_ADhhA/viewform?usp=sf_link"} target="_blank" >
              <div style={{
                marginLeft:50,
                textAlign: "center",
                textDecorationLine:"none"
              }}>
                <input style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  outline:0,
                  backgroundColor:"#e6bf78",
                  border:0,
                  color:"#ffffff",
                  cursor:"pointer"
                }}value="Tell me your Story"></input>
                </div>
              </a>
            </div>
            
            <a href={"https://opensea.io/blog/guides/non-fungible-tokens/"} target="_blank">
            <div style={{
              cursor: "pointer",
              fontSize: 18,
              fontWeight: "bold",
              color: "#000000",
              textDecorationLine: "underline"
            }}>What is NFT?</div>
          </a>
          </div>
          <div style={{
            display: "flex",
            width: 650,
            flexDirection: "column",
            justifyContent: "flex-start"
          }}>
            <div style={{
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 25,
              paddingLeft: 25,
              textAlign: "left",
              verticalAlign: "center",
              marginBottom: 35,
              backgroundColor: "#f2f3f8",
              alignSelf: "flex-start",
            }}>Go back to you country!! You guys brought COVID- 19</div>
            <div style={{
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 25,
              paddingLeft: 25,
              textAlign: "left",
              verticalAlign: "center",
              marginBottom: 35,
              backgroundColor: "#f2f3f8",
              alignSelf: "flex-start",
            }}>Where are you from? <br />
              No I mean where are you really from?</div>
            <div style={{
              minWidth: 450,
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 25,
              paddingLeft: 25,
              textAlign: "left",
              verticalAlign: "center",
              marginBottom: 35,
              backgroundColor: "#f2f3f8",
              alignSelf: "flex-start",
            }}>Your English is Very Good! <br />
              Where did you learned?</div>
            <div style={{
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 25,
              paddingLeft: 25,
              textAlign: "left",
              verticalAlign: "center",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontWeight: "bold",
              alignSelf: "flex-end",
            }}>I was born and raised in USA</div>
          </div>
        </div>
        <div ref={collectionRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 250,
          marginBottom: 20
        }}>AS AN ARTIST WE WILL DO WHAT WE CAN DO</div>

<div style={{
          width: 660,
          opacity: 0.8,

          color: "#000000",
          lineHeight: 1.56,
          marginBottom: 40,
        }}>All pieces are inspired by AAPI stories and my own experience.  As an artist and blockchain enthusiast, I would like to leave our first movement on blockchain.
        My works will be traded in opeansea.io and 100% sales will be donated to support AAPI community movements,</div>
        {/* <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          
        }}>All pieces are inspired by AAPI stories and my own experience. As an artist and</div> <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          
        }}>
        blockchain enthusiast, we would like to leave our first movement on blockchain. </div> 
        
        <div 
        style={{
          
          display:"flex"
        }}> <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          
        }}>
        Our works will be traded in</div><div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          
        }}> opensea.io </div><div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          
        }}>and 100% sales will be donated to support </div> */}
         {/* </div> */}
       
        
        
        <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          marginBottom: 40,
        }}>
        AAPI community movements.</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}>
          {firstList.map((item) => {
            return (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}>
                <div style={{
                  
                  width: 400,
                  height: 400,
                  borderRadius: 8,
                  marginBottom: 20,
     display:"flex",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between",
                }}>


<a href={item.url} target="_blank">
                    
            
                  <img style={{width:400,
                  maxHeight:400,
                  borderRadius:8}} src={item.img}></img>
                  
                  
                  </a>


                </div>
                <div style={{
                  width: 400,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: 10
                }}>{item.title}</div>
                <div style={{
                  width: 400,
                  height:80,
                  opacity: 0.8,
                  fontSize: 18,
                  color: "#000000",
                  lineHeight: 1.5,
                  marginBottom: 10
                }}>{item.content}</div>
                <div
                style={{
                  fontSize:18,
                  fontWeight:"bold",
                  marginTop:10
                }}>
                  {item.drawn}
                </div>
              </div>
            )
          })}
        </div>
     
        <div ref={supportRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>SUPPORTING AAPI COMMUNITY</div>
        <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          marginBottom: 40,
        }}>AAPI.NFT sales will be used to support #StopAsianHate, #HateIsAVirus communities.</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}>

          <a href={"https://stopaapihate.org/"} target="_blank">
          <div style={{
            
            width: 200,
            height: 200,
          }}>
            <img src={aapi1}/>
          </div>
          </a>

          <a href={"https://hateisavirus.org/"} target="_blank">
          <div style={{
            
            width: 200,
            height: 200,
          }}><img src={aapi2}/></div>
</a>
          <a href={"https://aapip.org/"} target="_blank">
          <div style={{
            
            width: 200,
            height: 200,
          }}><img src={aapi3}/></div>
</a>
          <a href={"https://www.gofundme.com/"} target="_blank">
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            width: 200,
            height: 200,
          }}><img src={aapi4}/></div>
</a>
          <a href={"https://www.apcf.org/"} target="_blank">
          <div style={{
            
            width: 200,
            height: 200,
          }}><img src={aapi5}/></div>
          </a>
        </div>
        <div style={{
          marginTop: 40,
          fontSize: 24,
          fontWeight: "bold",
          color: "#000000",
          marginBottom: 20,
        }}>Directly Funding Victims’ fund</div>
        <a href={"https://www.gofundme.com/f/sf-api-victims-and-survivors-assistance-fund"} target="_blank">
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 20
        }}>Victims and Survivors Fund (San Francisco Bay Area)</div>
        </a>
        <a href={"https://www.classy.org/give/326018/#!/donation/checkout"} target="_blank">
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 20
        }}>Oakland Chinatown Victims Fund</div>
        </a>
        <a href={"https://actionnetwork.org/fundraising/support-georgias-asian-american-community/"} target="_blank">
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 100
        }}>Support Georgia’s Asian American Community</div>
        </a>

        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: 1280,
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: 620,
          }}>
            <div style={{
              marginTop: 40,
              fontSize: 24,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
            }}>SUPPORT OUR WORKS!</div>
            <div style={{
              width: 660,
              opacity: 0.8,
              fontSize: 18,
              color: "#000000",
              lineHeight: 1.56,
              marginBottom: 40,
            }}>I would be pleased to get donation for running AAPI.NFT and better works</div>
            <div style={{
              width: 530,
              height: 160,
              borderRadius: 8,
              backgroundColor: "#3c3932"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
                <div style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginLeft: 20,
                  marginTop: 23
                }}>Give ETH to</div>
                <a href={"https://etherscan.io/address/0x8A39eC10AE914CD71DE75A766D7Beb78C1286D0e"} target="_blank">
                <input type="text" style={{
                  marginRight: 40,
                  marginTop: 23,
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#e5bf78",
                  textDecorationLine:"none",
                  backgroundColor:"#3c3932",
                  cursor:'pointer',
                  outline:0,
                  border:0
                }}
                value="0x8A39eC10AE914CD7..."></input>
                </a>
              </div>


              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>

                <div >
                  <input style={{
                    marginTop: 40,
                    marginLeft: 20,
                    width: 270,
                    height: 44,
                    borderRadius: 8,
                    textAlign:"right",
                    fontSize:20

                  }}
                    name="name"      //위에서 name의 값을 가져와 타겟을 가져온다.
                    placeholder="0.0"
                    onChange={onChange}
                    value={name}     //
                    type="number"
                  />
                </div>
                <div style={{
                  cursor: "pointer",
                  marginTop: 40,
                  marginRight: 20,
                  width: 180,
                  height: 48,
                  backgroundColor: "#e5bf78",
                  borderRadius: 8
                }}>
                  <div className="donate">

                    <div
                      onClick={donation} style={{
                        
                        marginTop: 11.2,
                        marginLeft: 52,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff"
                      }}>DONATE</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div style={{
            width: 510,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            <div style={{
              marginTop: 40,
              fontSize: 24,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
            }}>Special Thanks to...</div>
            <div>
              {/* {thanksList.map((item) => {
                return (
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginBottom: 10,
                  }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: "#9b3838",
                      marginRight: 16
                    }} />
                    <div style={{
                      fontSize: 18,
                      color: "#000000",
                      marginRight: 70,
                    }}>{item.add}</div>
                    <div style={{
                      width: 150,
                      textAlign: "right",
                      fontSize: 18,
                      color: "#000000"
                    }}>{item.amount}</div>
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
        <div ref={partnersRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 40
        }}>MEET OUR AAPI ARTISTS</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 80,
        }}>
          {artistList.map((item) => {
            return (
              <>
                <div style={{
                  width: 180,
                  height: 180,
                  backgroundColor: "#d8d8d8",
                  borderRadius: 90
                }}>
                  <img src={item.img}></img>
                </div>
              </>
            )
          })}
        </div>
       
        <div style={{
          fontSize: 21,
          fontWeight: "bold",
          color: "#000000",
          
          marginBottom: 20
        }}>Partnership and suggestions are More than welcome</div>
        <div style={{
          opacity: 0.8,
          fontSize: 18,
          lineHeight: 1.56,
          color: "#000000",
          marginBottom: 40,
          
        }}>AAPI.NFT is alway opened to your suggestion and partnership. <br />
        We can make to great together.</div>
        <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeo1t9c2r07Uxnd-ZjPT19_rxzuZr6a96NYwUim0a_f_ADhhA/viewform?usp=sf_link"} target="_blank">
      
        <div style={{
          width: 290,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 8,
          textAlign: "center",
          alignSelf: "center",
          backgroundColor: "#e5bf78",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 188,
        }}><div style={{
          marginLeft:50,
          textAlign: "center",
          textDecorationLine:"none"
        }}>
          <input style={{
            fontSize: 18,
            fontWeight: "bold",
            outline:0,
            backgroundColor:"#e6bf78",
            border:0,
            color:"#ffffff",
            cursor:"pointer"
          }}value="Tell me your Story"></input>
        
        </div>
        </div>
        </a>
      
      </div>
      <div style={{
        width: "100%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}>
        <div style={{
          fontSize: 18,
          color: "#ffffff",
          marginBottom: 20,
        }}>Follow AAPI.NFT</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>

<a href={"https://twitter.com/AapiNft"} target="_blank">
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20,
            borderRadius:24
            }} src={twit}></img></div> 
            </a>
          <a href={"https://www.instagram.com/aapi.nft/"} target="_blank">
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20,
            borderRadius:24
            }} src={ins}></img>
          </div>
          </a>
          <a href={"https://t.me/aapinft"} target="_blank">
          <div >
            <img style={{
                width: 48,
            height: 48,
            backgroundColor: "#ffffff",
            marginRight: 20,
            borderRadius:24
            }} src={tel}></img>   
          </div>
          </a>
{/* 
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} />
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} />
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
