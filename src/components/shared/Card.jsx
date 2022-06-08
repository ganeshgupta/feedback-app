import PropType from 'prop-types'

function Card({children, reverse}) {

    //Conditional Class  
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )

       // conditional Style 
    // return(
    //     <div className="card" style={{
    //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    //         color: reverse ? '#fff' : '#000',
    //     }}>{children}</div>
    // )

}

Card.defaultProps = {
    reverse: false,
}

Card.PropType = {
    children: PropType.node.isRequired,
    reverse: PropType.bool,
}


export default Card


