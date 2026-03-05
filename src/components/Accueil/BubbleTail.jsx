function BubbleTail() {
  return (
    <svg className="bubbleTail" 
      viewBox="0 0 46 30" 
      style={{ overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle pointant à gauche */}
      <polygon points="46,0 46,30 0,15" fill="#1a1a1a" />
        <polygon points="50,0 50,30 5,15" fill="#ffffff" />
    </svg>
  )
}

export default BubbleTail