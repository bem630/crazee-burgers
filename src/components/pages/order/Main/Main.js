import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";


const Main = () => {
    
    return ( 
        <MainStyled>
            {/*<div className="basket">Basket</div>*/}
            <Menu/>
        </MainStyled>
     );
}
 
export default Main;

const MainStyled = styled.div`
        background: ${theme.colors.background_white};
        //height: calc( 95vh - 10vh)
        flex: 1;
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
        display: grid;
        grid-template-columns: 1fr;

        /*.basket {
            background: blue;
        }*/
        
        

        /*!SECTION
        <div className="cards" >
                {fakeMenu1.map((data) => {
                    <div className="card" key={data.id}>
                    <div>{data.imageSource}</div>
                    <div className="card-content">
                        <h1>{data.title}</h1>
                        <div className="card-footer">
                            <div className="price">{data.title}</div>
                            <button className="button">Ajouter</button>
                        </div>
                    </div>
                </div>
                } )}
                
            </div>

        .cards {
            display: flex;
            justify-content: space-evenly;
            
            .card {
                background: lightgrey;
                width: 240px;
                height: 330px;
                margin-right: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                
                img {
                    width: 240px;
                    height: 145px;
                }
                .card-content {
                    
                    h1 {
                        text-transform: uppercase;
                        font-size: 18px;
                        padding-left: 20px;
                    }
                    .card-footer {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                }
                
            }
        }*/
`;