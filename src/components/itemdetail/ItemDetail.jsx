const ItemDetail = ({detail}) => {
  return (
     <div className="container card mb-3" style={{ width: "350px" }}>
        <img className="card-img-top" src={detail.image} />
        <h5 className="card-title">{detail.title}</h5>
        <h5 className="card-title">${detail.price}</h5>
     </div>
  )
}
export default ItemDetail;
