//name export just write export before name 

//here we first import tilte bc title is being use here it has nothing to do with name exxport
//this how we import default export
import Title from "./Title";

//exporting name export
export const HeaderComponent = () => {
    return (
      <>
      
      <div className="header">
        
        <Title/>
        
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About-Us</li>
            <li>Contact-Us</li>
            <li>Offer</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
      </>
    );
  };

