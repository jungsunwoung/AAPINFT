import React from "react";

function App() {
  const firstList = [
    {
      title: "ASIAN STEREOTYPE",
      content: "Hey! look at this guy. He is from CHINA. Can’t you believe our calculation?"
    },
    {
      title: "Lorem ipsum.",
      content: "Lorem ipsum dolor sit amet, Consetetur Sadipscing elitr, sed diam nonumy eirmod."
    },
    {
      title: "What’s next?",
      content: "Tell me your stories to shout out STOP AAPI HATE"
    },
  ]
  return (
    <div style={{
      width: 1920,
      backgroundColor: "#ffffff",
    }}>
      <div style={{
        marginBottom: 100
      }}>헤더 집어 넣기</div>
      <div style={{
        width: 1280,
        backgroundColor: "#ffffff",
        paddingLeft: 320,
        paddingRight: 320,
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
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
            }}>HAVE YOU EVER HEARD
            ONE OF THOSE?</div>
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
              <div style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
                textAlign: "center",
              }}>Tell me your Story</div>
            </div>
            <div style={{
              cursor: "pointer",
              fontSize: 18,
              fontWeight: "bold",
              color: "#000000",
              textDecorationLine: "underline"
            }}>What is NFT?</div>
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
        <div style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 330,
          marginBottom: 20
        }}>As an Artist I will do what I can do</div>
        <div style={{
          width: 660,
          opacity: 0.8,
          fontSize: 18,
          color: "#000000",
          lineHeight: 1.56,
          marginBottom: 40,
        }}>All pieces are inspired by AAPI stories and my own experience.  As an artist and blockchain enthusiast, I would like to leave our first movement on blockchain.
        My works will be traded in opeansea.io and 100% sales will be donated to support AAPI community movements,</div>
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
                  backgroundColor: "#000000"
                }}></div>
                <div style={{
                  width: 400,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: 10
                }}>{item.title}</div>
                <div style={{
                  width: 400,
                  opacity: 0.8,
                  fontSize: 18,
                  color: "#000000",
                  lineHeight: 1.5,
                  marginBottom: 10
                }}>{item.content}</div>
              </div>
            )
          })}
        </div>
        <div style={{
          cursor: "pointer",
          fontSize: 18,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 10,
          textDecorationLine: "underline"
        }}>How it works?</div>
        <div style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>Supporting AAPI community</div>
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
          <div style={{
            backgroundColor: "#000000",
            width: 200,
            height: 200,
          }}></div>
          <div style={{
            backgroundColor: "#000000",
            width: 200,
            height: 200,
          }}></div>
          <div style={{
            backgroundColor: "#000000",
            width: 200,
            height: 200,
          }}></div>
          <div style={{
            backgroundColor: "#000000",
            width: 200,
            height: 200,
          }}></div>
          <div style={{
            backgroundColor: "#000000",
            width: 200,
            height: 200,
          }}></div>
        </div>
        <div style={{
          marginTop: 40,
          fontSize: 24,
          fontWeight: "bold",
          color: "#000000",
          marginBottom: 20,
        }}>Directly Funding Victims’ fund</div>
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 20
        }}>Victims and Survivors Fund (San Francisco Bay Area)</div>
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 20
        }}>Oakland Chinatown Victims Fund</div>
        <div style={{
          fontSize: 18,
          opacity: 0.8,
          lineHeight: 1.56,
          color: "#000000",
          textDecorationLine: "underline",
          fontWeight: "bold",
          marginBottom: 100
        }}>Support Georgia’s Asian American Community</div>
        <div style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 40
        }}>Meet Partners of AAPI.NFT</div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 80,
        }}>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <>
                <div style={{
                  width: 180,
                  height: 180,
                  backgroundColor: "#d8d8d8",
                  borderRadius: 90
                }} /> 
              </>
          )})}
        </div>
        <div style={{
          fontSize: 21,
          fontWeight: "bold",
          color: "#000000",
          alignSelf: "center",
          marginBottom: 20
        }}>Partnership and suggestions are More than welcome</div>
        <div style={{
          opacity: 0.8,
          fontSize: 18,
          lineHeight: 1.56,
          color: "#000000",
          marginBottom: 40,
          alignSelf: "center",
        }}>AAPI.NFT is alway opened to your suggestion and partnership. <br />
        We can make to great together.</div>
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
        }}>Tell me your Story</div>
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
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
