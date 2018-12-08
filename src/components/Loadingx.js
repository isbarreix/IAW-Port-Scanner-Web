import React from 'react';
import ReactLoading from "react-loading";
import { Section , Article} from "./generic";
import Countdown from 'react-countdown-now';

class Loadingx extends React.Component{

	render(){
        const renderer = ({minutes, seconds}) => {
            return <span>Espera de: {minutes}:{seconds}</span>
        }
            
		return(	
			<Section>
					<Article>
							<ReactLoading type="spinningBubbles" color="#007bff" />
							<span>Procesando puertos...</span>
                             <Countdown date={Date.now() + (263*this.props.time)} renderer={renderer} />
                             
					</Article>
			</Section>
		);
	}
}



export default Loadingx;