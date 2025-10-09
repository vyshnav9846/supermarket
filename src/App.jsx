import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <> 
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e8ecf1ff" }}>
      
      {/* NAVBAR */}
     <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#fff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    }}
  >
    {/* Logo */}
   <div style={{  alignItems: "center" }}>
      <h1 style={{ fontFamily: "'Orbitron', sans-serif",fontSize: "30px", fontWeight: "800PX" , color:"#15ab4eff"}}>POKAK</h1>

            <p style={{fontSize:"10px",color:"#15ab4eff"}}>TECHNOLOGIES PVT LTD</p>
    </div>
    {/* Location */}
    <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1, marginLeft: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "#333" }}>
        <i className="fa-solid fa-location-dot" style={{ marginRight: "6px" }}></i>
        Location
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#f2f5f5",
          borderRadius: "20px",
          padding: "8px 12px",
          flex: 1,
        }}
      >
        <i className="fa-solid fa-magnifying-glass" style={{ marginRight: "8px", color: "#888", }}></i>
        <input
          type="text"
          placeholder='Search for "Ice Cream"'
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            flex: 1,
            fontSize: "14px",
          }}
        />
      </div>
    </div>

    
    <div style={{ display: "flex", alignItems: "center", gap: "25px", marginLeft: "40px" }}>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#333" }}>
        <i className="fa-solid fa-rotate" style={{ fontSize: "18px", color: "green" }}></i>
        <div>AI</div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#333" }}>
        <i className="fa-solid fa-gift" style={{ fontSize: "18px" }}></i>
        <div>Offers</div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#333", position: "relative" }}>
        <i className="fa-solid fa-cart-shopping" style={{ fontSize: "18px" }}></i>
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "#fff",
            fontSize: "10px",
            borderRadius: "50%",
            padding: "2px 6px",
          }}
        >
          1
        </span>
        <div>Cart</div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#333" }}>
        <i
          className="fa-solid fa-user"
          style={{
            fontSize: "18px",
            background: "#ddd",
            padding: "6px",
            borderRadius: "50%",
          }}
        ></i>
        <div>Profile</div>
      </div>
    </div>
  </div>
      {/* PAGE CONTENT */}
      <div style={{ padding: "26px 48px" }}>
        
        
       
           <div >



    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "15px",
        paddingBottom: "10px",
        width: "100%",
        gap:"30px"
      }}
    >
    
      
      {[
        { title: "Groceries  & Kitchen", img: "https://m.media-amazon.com/images/I/81gaG4ymqkL._UF1000,1000_QL80_.jpg" },
        { title: "Baby & Kids", img: "https://cittaworld.com/cdn/shop/files/Complete_Baby_Care_Set_with_baby_shampoo_wash_balm_oil_and_diaper_rash_cream_dermatologist_approved_newborn_baby_care_kit.webp?v=1748949602" },
        { title: "Personal Care & Hygiene", img: "https://s3.envato.com/files/302806066/preview.jpg" },
        { title: "Groceries & Kitchen", img: "https://goodcheapeats.com/wp-content/uploads/2021/01/flatlay-of-pantry-groceries.jpg" },
        { title: "Groceries & Kitchen", img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2Farchive%2F0f4a8c0d56aff4304fd71c7af0c58f54bbc0ae9e" },
        { title: "Groceries & Kitchen", img: "https://m.media-amazon.com/images/I/71Xc8-TiBUL.jpg" },
        { title: "Groceries & Kitchen", img: "https://www.ikea.com/ext/ingkadam/m/39eb69c63160c65e/original/PE995686.jpg?f=s" },
        { title: "Groceries & Kitchen", img: "https://www.eatingwell.com/thmb/Rm_vEFGdynCeHsEDYpAmRCjJRaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tools-503af2cee247443683968c0963e49f32.jpg" },
        { title: "Groceries & Kitchen", img: "https://www.deerandoak.co.uk/cdn/shop/articles/Stainless_Steel_Kitchen_Tools_1000x1000.png?v=1710850992" },
      ].map((cat, i) => (
        <div
          key={i}
          style={{
           width: "130px",
           height: "160px",
            background: "#fff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
            gap:"50px"
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
              margin: "10px 5px",
            }}
          >
            {cat.title}
          </p>
          {/* Image with green arc */}
          <div
            style={{
              background: "#e6fff3",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>

         
          
        </div>
      ))}
    </div>
  </div>

        {/*  BANNER */}
        
         <div
    style={{
      borderRadius: "16px",
      overflow: "hidden",
      width: "99%",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      position: "relative",
      backgroundImage:
        "url('https://www.shutterstock.com/image-illustration/3d-rendering-kitchen-utensils-usage-260nw-2115670793.jpg')", // Replace with your bg image
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
 
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(90deg, rgba(98, 71, 214, 0.9) 0%, rgba(98, 71, 214, 0.6) 40%, rgba(255,255,255,0) 100%)",
      }}
    ></div>

   
    <div
      style={{
        position: "relative",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "22px",
        paddingLeft: "30px",
        zIndex: 2,
      }}
    >
      <div>Best Home Deals</div>
      <div style={{ fontSize: "20px", marginTop: "5px" }}>40% OFF</div>
    </div>
  </div> 

           <div style={{ display: "flex", gap: "12px", padding: "10px" }}>
    {/* Card 1 */}
    <div
      style={{
        flex: "1",
        background: "#d4ffe0",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        width: "100%"
      }}
    >
      <div style={{ width:"100%",marginRight:"10px" }}>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold", }}>
          Essential Focus
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          Fresh Vegetables
        </p>
        <button
          style={{
            background: "#00aaff",
            border: "none",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src="https://cdn.mos.cms.futurecdn.net/v2/t:23,l:0,cw:748,ch:420,q:80,w:748/pnczF9pRToCAECtEzduNUT.jpg"
        alt="Vegetables"
        style={{ height: "70px" }}
      />
    </div>

    {/* Card 2 */}
    <div
      style={{
        flex: "1",
        background: "#fff3cc",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <div>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          Daily Saver
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          Grocery Discounts
        </p>
        <button
          style={{
            background: "#fff",
            border: "1px solid #333",
            color: "#000",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src="https://i.ndtvimg.com/i/2017-02/fruits-and-vegetables_650x366_41486465566.jpg?im=FaceCrop,algorithm=dnn,width=140,height=105"
        alt="Fruits"
        style={{ height: "70px" }}
      />
    </div>

    {/* Card 3 */}
    <div
      style={{
        flex: "1",
        background: "#ffe0e0",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <div>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          Must-Have
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          Snacks & Beverages
        </p>
        <button
          style={{
            background: "#ff4d4d",
            border: "none",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src="https://laxmiexportimport.com/wp-content/uploads/2024/09/Snacks-Beverages%E2%80%8B.jpg"
        alt="Snacks"
        style={{ height: "70px" }}
      />
    </div>

    {/* Card 4 */}
    <div
      style={{
        flex: "1",
        background: "#fff8cc",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <div>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          Best Value
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          Dairy & Bakery
        </p>
        <button
          style={{
            background: "#fff",
            border: "1px solid #333",
            color: "#000",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-fresh-pastry-and-bakery-items-available-on-trays-image_2581269.jpg"
        alt="Bakery"
        style={{ height: "70px" }}
      />
    </div>

    {/* Card 5 */}
    <div
      style={{
        flex: "1",
        background: "#f3e8e8",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <div>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          Trending Now
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          Chocolates
        </p>
        <button
          style={{
            background: "#800000",
            border: "none",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src="https://www.cocoahub.co.uk/cdn/shop/articles/Mars-Incorporated-Candy-Snickers-Milky-way-MMs-Twix.webp?v=1696494569&width=1100"
        alt="Chocolates"
        style={{ height: "70px" }}
      />
    </div>
  </div>
        

        {/* AI */}
         <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff3e0",
      borderRadius: "12px",
      padding: "20px",
      width: "54%",
    }}
  >
    
    <div style={{ flex: 1 }}>
      <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "bold" }}>
        Your personal grocery assistant
      </h3>
      <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#333" }}>
        Find recipes, get recommendations, and shop smarter with AI
      </p>
      <button
        style={{
          background: "#f7931e",
          border: "none",
          padding: "8px 16px",
          borderRadius: "8px",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Try Now
      </button>
    </div>

   
    <div style={{ flex: 2, display: "flex", gap: "15px", justifyContent: "flex-end", }}>
      {/* Card 1 */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "12px",
          textAlign: "center",
          flex: 1,
            height:"130px"
        
        }}
      >
        <h4 style={{ fontSize: "14px", margin: "0 0 8px 0" }}>
          Recipe  Suggestions
        </h4>
        <img
          src="https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg"
          alt="Recipe"
          style={{ width: "70px", height: "60px", objectFit: "contain" }}
        /> <br />
        <button
          style={{
            marginTop: "8px",
            background: "#f7931e",
            border: "none",
            padding: "6px 20px",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Browse
        </button>
      </div>

      {/* Card 2 */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "12px",
          textAlign: "center",
          flex: 1,
        }}
      >
        <h4 style={{ fontSize: "14px", margin: "0 0 8px 0" }}>
          Personalized Picks
        </h4>
        <img
          src="https://laxmiexportimport.com/wp-content/uploads/2024/09/Snacks-Beverages%E2%80%8B.jpg"
          alt="Picks"
          style={{ width: "70px", height: "60px", objectFit: "contain" }}
        /> <br />
        <button
          style={{
            marginTop: "8px",
            background: "#f7931e",
            border: "none",
            padding: "6px 20px",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          View
        </button>
      </div>

      {/* Card 3 */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "12px",
          textAlign: "center",
          flex: 1,
        }}
      >
        <h4 style={{ fontSize: "14px", margin: "0 0 8px 0" }}>
          Meal Planning
        </h4>
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
          alt="Meal"
          style={{ width: "70px", height: "60px", objectFit: "contain" }}
        />
        <button
          style={{
            marginTop: "8px",
            background: "#f7931e",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Try Search
        </button>
      </div>
    </div>
  </div>

       
        <div style={{ marginTop: 28 }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
      <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Recommended for you</h3>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "green", fontWeight: "bold", cursor: "pointer" }}>
        See all →
      </div>
    </div>

    
    <div style={{ display: "flex", gap: "28px", width:"100%" }}>
      
      {/* Product  */}
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>5%</div>
        <img src="https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg" alt="Amul Dark Chocolate" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Amul Dark <br /> Chocolate 70% <br /> Cocoa</p>
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>200g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹180</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹200</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>–</button>
          <span style={{ padding: "0 8px", fontWeight: "bold" }}>01</span>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>+</button>
        </div>
      </div>

      {/* Product 2 */}
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859" alt="Organic Almond Milk" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Organic <br /> Almond Milk</p> <br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹320</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

      {/* Product 3 */}
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>3%</div>
        <img src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997" alt="Hybrid Tomato" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Hybrid Tomato</p> <br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>500g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹30</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

      {/* Product 4 */}
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg" alt="Broccoli" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Broccoli</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1Piece</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹50</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹60</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>
     <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>5%</div>
        <img src="https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg" alt="Amul Dark Chocolate" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Amul Dark <br /> Chocolate 70% <br /> Cocoa</p>
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>200g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹180</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹200</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>–</button>
          <span style={{ padding: "0 8px", fontWeight: "bold" }}>01</span>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>+</button>
        </div>
      </div>



<div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859" alt="Organic Almond Milk" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Organic <br /> Almond Milk</p><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹320</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

     
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>3%</div>
        <img src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997" alt="Hybrid Tomato" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Hybrid Tomato</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>500g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹30</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

      
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg" alt="Broccoli" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Broccoli</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1Piece</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹50</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹60</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>
      

    </div>
        </div>

        {/* FLASH SALE */}
        <div style={{ marginTop: 28, padding: "18 50", borderRadius: 12, background: "linear-gradient(90deg,#ebfff3,#f8fff8)", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#ff8a65",marginLeft:"15px",marginTop:"10px" }}>Flash Sale</div>
            <div style={{ color: "#ff6b6b", fontWeight: 700,marginRight:"15PX",marginTop:"10PX" }}>02h 30m 02s</div>
          </div>

          <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: 8,marginLeft:25 }}>
           
           <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859" alt="Organic Almond Milk" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Organic <br /> Almond Milk</p><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹320</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>3%</div>
        <img src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997" alt="Hybrid Tomato" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Hybrid Tomato</p> <br /> <br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>500g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹30</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

     
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg" alt="Broccoli" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Broccoli</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1Piece</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹50</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹60</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>5%</div>
        <img src="https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg" alt="Amul Dark Chocolate" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Amul Dark <br /> Chocolate 70% <br /> Cocoa</p>
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>200g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹180</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹200</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>–</button>
          <span style={{ padding: "0 8px", fontWeight: "bold" }}>01</span>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>+</button>
        </div>
      </div>
<div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859" alt="Organic Almond Milk" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Organic <br /> Almond Milk</p> <br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹320</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

     
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>3%</div>
        <img src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997" alt="Hybrid Tomato" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Hybrid Tomato</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>500g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹30</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>

     
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>10%</div>
        <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg" alt="Broccoli" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Broccoli</p><br /><br />
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1Piece</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹50</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹60</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 10px", cursor: "pointer" }}>+</button>
        </div>
      </div>
      <div style={{ minWidth: "130px", background: "#fff", borderRadius: "12px", padding: "12px", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ position: "absolute", top: "8px", left: "8px", background: "green", color: "#fff", fontSize: "12px", fontWeight: "bold", padding: "2px 6px", borderRadius: "6px" }}>5%</div>
        <img src="https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg" alt="Amul Dark Chocolate" style={{ width: "100%", height: "90px", objectFit: "contain", marginTop: "25px" }} />
        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>Amul Dark <br /> Chocolate 70% <br /> Cocoa</p>
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>200g</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹180</span>
          <span style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>₹200</span>
        </div>
        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "20px", overflow: "hidden", fontSize: "14px" }}>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>–</button>
          <span style={{ padding: "0 8px", fontWeight: "bold" }}>01</span>
          <button style={{ background: "green", color: "#fff", border: "none", padding: "2px 8px", cursor: "pointer" }}>+</button>
        </div>
      </div>

          </div>
        </div>

        {/*  BRANDS */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Top Brands</div> <br />
          <div style={{ display: "flex", gap: 70, width:"100%" }}>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: "10px", display: "flex", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/amul-140107204007-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds" alt="amul" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://interbrand.com/wp-content/uploads/2020/10/nestle-square.png" alt="nestle" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUckWbbgWiea9OFBJyiSX8Ug7Bszom3JksXjDSp6UwUKePdNehuBSORAJAK9Byxb-ClVg&usqp=CAU" alt="mother" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4eUb0fR8NkIBmb__DzgKVBfbocWDy2-7mg&s" alt="parag" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUckWbbgWiea9OFBJyiSX8Ug7Bszom3JksXjDSp6UwUKePdNehuBSORAJAK9Byxb-ClVg&usqp=CAU" alt="mother" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4eUb0fR8NkIBmb__DzgKVBfbocWDy2-7mg&s" alt="parag" style={{ width: 120, objectFit: "contain" }} />
            </div>
          </div>
        </div>
<br /> <br /> 
<h3>Groceries & Kitchen</h3> <br />
        {/*  (Groceries & Kitchen) */}
        <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "25px",
        paddingBottom: "10px",
        
      }}
    >
    
      
      {[
        { title: "Fresh Produce", img: "https://m.media-amazon.com/images/I/81gaG4ymqkL._UF1000,1000_QL80_.jpg" },
        { title: "Dairy & Eggs", img: "https://whisk.com/wp-content/uploads/2023/02/shutterstock_1679020255.jpg" },
       
       { title: "Meet & Seafood", img: "https://japanbite.com/cdn/shop/articles/featured_image_3ac868b2-7ad1-4fc2-adb9-38bf5a447241-369559.jpg?v=1715329600" },
        { title: "Frozen Foods", img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/18/94184.jpg" },
        { title: "Pantry Staples", img: "https://www.kroger.com/product/images/large/front/0005100001601" },
        { title: "Snacks & Sweets", img: "https://images-cdn.ubuy.co.in/672ddcbe087025301d0dd7fb-polish-candy-gift-box-snack-treats-of.jpg" },
        { title: "Beverages", img: "https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop" },

        { title: "Breakfast Foods", img: "https://www.eatingwell.com/thmb/_luPTFIxt8ETvnaGkwErswQHFAM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-feta-egg-and-spinach-breakfast-taco-step-05-2399-facf1af19e874405bffc5b55b80dc035.jpg" },
         { title: "Small Appliances", img: "https://images.thdstatic.com/productImages/d56e1bcc-eb26-496b-9086-0b643ddbd82e/svn/stainless-steel-oxo-coffee-grinders-8717000-64_600.jpg" },
          { title: "Food Storage", img: "https://img.lazcdn.com/g/ff/kf/S65b51ade121242d3861f31327dd7942a7.jpg_720x720q80.jpg" },
      ].map((cat, i) => (
        <div
          key={i}
          style={{
           width: "120px",
           height: "160px",
            background: "#e6fee1ff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
              margin: "10px 5px",
            }}
          >
            {cat.title}
          </p>
         
          <div
            style={{
              background: "#e6fff3",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>

      
          
        </div>
      ))}
    </div>
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "25px",
        paddingBottom: "10px",
      }}
    >
    
      
      {[
        { title: "Cookware", img: "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1750352947/prod/content/dam/CRO-Images-2025/Home/CR-Home-InlineHero-Best-Cookware-Sets-0625" },
        { title: "Cutlery", img: "https://m.media-amazon.com/images/I/7155b16ETeL._UF350,350_QL80_.jpg" },
        { title: "Tableware", img:"https://m.media-amazon.com/images/I/71AaOLMchAL._UF894,1000_QL80_.jpg" },
       { title: "Kitchen Tools", img: "https://www.saltylemonsister.com/wp-content/uploads/50-Must-Have-Kitchen-Items-List.jpg" }, 
        { title: "Cleaning Supplies", img: "https://www.maid4condos.com/content/uploads/2018/10/2.jpg" },
        { title: "Specialty Items", img: "https://m.media-amazon.com/images/I/41y5udw9ESL._SR290,290_.jpg" },
       

        
      ].map((cat, i) => (
        <div
          key={i}
          style={{
           width: "120px",
           height: "160px",
             background: "#e6fee1ff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
              margin: "10px 5px",
            }}
          >
            {cat.title}
          </p>
         
          <div
            style={{
              background: "#e6fff3",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>

      
          
        </div>
      ))}
    </div>
    <br />
<h3>Baby & Kids</h3> <br />
        {/*  Baby & Kids) */}
        <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "25px",
        paddingBottom: "10px",
        
      }}
    >
    
      
      {[
        { title: "Fresh Produce", img: "https://m.media-amazon.com/images/I/81gaG4ymqkL._UF1000,1000_QL80_.jpg" },
        { title: "Dairy & Eggs", img: "https://whisk.com/wp-content/uploads/2023/02/shutterstock_1679020255.jpg" },
       
       { title: "Meet & Seafood", img: "https://japanbite.com/cdn/shop/articles/featured_image_3ac868b2-7ad1-4fc2-adb9-38bf5a447241-369559.jpg?v=1715329600" },
        { title: "Frozen Foods", img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/18/94184.jpg" },
        { title: "Pantry Staples", img: "https://www.kroger.com/product/images/large/front/0005100001601" },
        { title: "Snacks & Sweets", img: "https://images-cdn.ubuy.co.in/672ddcbe087025301d0dd7fb-polish-candy-gift-box-snack-treats-of.jpg" },
        { title: "Beverages", img: "https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop" },

        { title: "Breakfast Foods", img: "https://www.eatingwell.com/thmb/_luPTFIxt8ETvnaGkwErswQHFAM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-feta-egg-and-spinach-breakfast-taco-step-05-2399-facf1af19e874405bffc5b55b80dc035.jpg" },
         { title: "Small Appliances", img: "https://images.thdstatic.com/productImages/d56e1bcc-eb26-496b-9086-0b643ddbd82e/svn/stainless-steel-oxo-coffee-grinders-8717000-64_600.jpg" },
          { title: "Food Storage", img: "https://img.lazcdn.com/g/ff/kf/S65b51ade121242d3861f31327dd7942a7.jpg_720x720q80.jpg" },
      ].map((cat, i) => (
        <div
          key={i}
          style={{
           width: "120px",
           height: "160px",
            background: "#e6fee1ff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
              margin: "10px 5px",
            }}
          >
            {cat.title}
          </p>
        
          <div
            style={{
              background: "#e6fff3",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>

        
          
        </div>
      ))}
    </div>
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "25px",
        paddingBottom: "10px",
      }}
    >
    
      
      {[
        { title: "Cookware", img: "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1750352947/prod/content/dam/CRO-Images-2025/Home/CR-Home-InlineHero-Best-Cookware-Sets-0625" },
        { title: "Cutlery", img: "https://m.media-amazon.com/images/I/7155b16ETeL._UF350,350_QL80_.jpg" },
        { title: "Tableware", img:"https://m.media-amazon.com/images/I/71AaOLMchAL._UF894,1000_QL80_.jpg" },
       { title: "Kitchen Tools", img: "https://www.saltylemonsister.com/wp-content/uploads/50-Must-Have-Kitchen-Items-List.jpg" }, 
        { title: "Cleaning Supplies", img: "https://www.maid4condos.com/content/uploads/2018/10/2.jpg" },
        { title: "Specialty Items", img: "https://m.media-amazon.com/images/I/41y5udw9ESL._SR290,290_.jpg" },
       

        
      ].map((cat, i) => (
        <div
          key={i}
          style={{
           width: "120px",
           height: "160px",
             background: "#e6fee1ff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#333",
              margin: "10px 5px",
            }}
          >
            {cat.title}
          </p>
         
          <div
            style={{
              background: "#e6fff3",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>

         
          
        </div>
      ))}
    </div>
</div>
        {/* FOOTER */}
         <footer style={{ backgroundColor: "#15ab4eff", color: "white", padding: "35px", marginTop: "30px",height:"250px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
          <div>
           <br /> 
            <h1 style={{ fontFamily: "'Orbitron', sans-serif",fontSize: "60px", fontWeight: "200PX" }}>POKAK</h1>

            <br /><p style={{fontSize:"16px"}}>TECHNOLOGIES PVT LTD</p>  <br />
            <div style={{justifyItems:"space-evenly",fontSize:"20px"}}><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-linkedin-in"></i></div>
          </div>
          <div> <br />
            <h4 style={{ fontWeight: "bold" }}>Quick Links</h4> <br />
            <p>Home</p><br />
            <p>Rental</p> <br />
            <p>Paying Guest</p> <br />
            <p>Buying</p> <br />
            <p>Offers</p> <br />
            <p>Bookings</p> <br />
          </div>
          <div> <br />
            <h4 style={{ fontWeight: "bold" }}>Customer Care</h4> <br />
            <p>Help Center</p><br />
            <p>FAQ</p> <br />
            <p>Contact Support</p> <br />
            <p>Cancellation & Refund Policies</p> <br />
            <p>Terms & Conditions</p> <br />
            <p>Privacy & Policies</p> <br />
          </div> 
         
        </div>
      </footer>

      
    </div>
    </>
  )
}

export default App
