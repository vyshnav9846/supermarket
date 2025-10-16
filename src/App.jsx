import { useState } from 'react'

import './App.css'

function App() {
  
const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <> 
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e8ecf1ff" }}>
      
      {/* NAVBAR */}
     <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "10px 25px",
        background: "#fff",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        animation: "slideDown 0.6s ease-out",
        gap: "15px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "30px",
            fontWeight: "800",
            color: "#15ab4eff",
            marginBottom: "3px",
          }}
        >
          POKAK
        </h1>
        <p style={{ fontSize: "10px", color: "#15ab4eff", margin: 0 }}>
          TECHNOLOGIES PVT LTD
        </p>
      </div>

      {/* Location */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flex: "1 1 350px",
          minWidth: "250px",
           width: "350px",
           marginLeft:"500px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#333",
            cursor: "pointer",
            transition: "color 0.3s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#15ab4eff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
        >
          <i
            className="fa-solid fa-location-dot"
            style={{ marginRight: "6px" }}
          ></i>
          Location
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f2f5f5",
            borderRadius: "25px",
            padding: "8px 15px",
            width:"100%",
            flex: 1,
            boxShadow: isSearchFocused
              ? "0 0 8px rgba(21,171,78,0.4)"
              : "inset 0 2px 3px rgba(0,0,0,0.05)",
            transform: isSearchFocused ? "scale(1.03)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ marginRight: "8px", color: "#777" }}
          ></i>
          <input
            type="text"
            placeholder='Search for "Ice Cream"'
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              flex: 1,
              fontSize: "14px",
              minWidth: "100px",
              transition: "width 0.4s ease",
              width: isSearchFocused ? "220px" : "150px",
            }}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </div>

    
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          minWidth: "220px",
          flex: "0 1 300px",
        }}
      >
        {[
          { icon: "fa-rotate", label: "AI", color: "green" },
          { icon: "fa-gift", label: "Offers", color: "#f39c12" },
          { icon: "fa-cart-shopping", label: "Cart", color: "#333", badge: "1" },
          { icon: "fa-user", label: "Profile", color: "#333" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#333",
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              flex: "0 0 auto",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <i
              className={`fa-solid ${item.icon}`}
              style={{
                fontSize: "18px",
                color: item.color,
                background:
                  item.icon === "fa-user" ? "#ddd" : "transparent",
                padding: item.icon === "fa-user" ? "6px" : "0",
                borderRadius: item.icon === "fa-user" ? "50%" : "0",
              }}
            ></i>

            {item.badge && (
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
                  animation: "pulse 1.2s infinite ease-in-out",
                }}
              >
                {item.badge}
              </span>
            )}
            <div>{item.label}</div>
          </div>
        ))}
      </div>

      
      <style>
        {`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}
      </style>
    </div>
      {/* PAGE CONTENT */}
      <div style={{ padding: "26px 48px" }}>
        
        
       
           <div >



   <div
  style={{
    display: "flex",
    overflowX: "auto",
    gap: "30px",
    paddingBottom: "10px",
    width: "100%",
    scrollBehavior: "smooth",
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
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.8s ease",
        animation: `fadeInUp 0.8s ease ${(i * 0.1).toFixed(1)}s forwards`,
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
      }}
    >
      <p
        style={{
          fontSize: "13px",
          fontWeight: "bold",
          color: "#333",
          margin: "10px 5px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
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
          transition: "transform 0.5s ease",
        }}
      >
        <img
          src={cat.img}
          alt={cat.title}
          style={{
            maxHeight: "100px",
            objectFit: "contain",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  ))}
</div>

<style>
{`
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
`}
</style>

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
      "url('https://www.shutterstock.com/image-illustration/3d-rendering-kitchen-utensils-usage-260nw-2115670793.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center", transition: "transform 0.6s ease, box-shadow 0.6s ease",
    animation: "bgZoom 8s ease-in-out infinite alternate, fadeIn 1.2s ease-in-out",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(98, 71, 214, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
    
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
       animation: "gradientShift 6s ease-in-out infinite alternate",
      zIndex: 1,
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
      transform: "translateX(-20px)",
      opacity: 0,
      animation: "slideIn 1s ease-out forwards",
      animationDelay: "0.4s",
      textShadow: "0 2px 5px rgba(0,0,0,0.3)",
    }}
  >
    <div>Best Home Deals</div>
    <div
    
      style={{
        fontSize: "20px",
        marginTop: "5px",
        animation: "bounce 1s infinite alternate ease-in-out",
         color: "#ffe082",
        textShadow: "0 0 10px rgba(255, 224, 130, 0.9)",
      }}
    >
      40% OFF
    </div>
  </div>

 
  <style>
    {`
      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.98); }
        100% { opacity: 1; transform: scale(1); }
      }

      @keyframes shimmer {
        0% { opacity: 0.9; }
        100% { opacity: 1; }
      }

      @keyframes slideIn {
        0% { transform: translateX(-30px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-3px); }
      }
    `}
  </style>
</div>

           <div
  style={{
    display: "flex",
    gap: "12px",
    padding: "10px",
    flexWrap: "wrap",
  }}
>
  {[
    {
      title: "Essential Focus",
      subtitle: "Fresh Vegetables",
      color: "#d4ffe0",
      btnBg: "#00aaff",
      btnColor: "#fff",
      img: "https://cdn.mos.cms.futurecdn.net/v2/t:23,l:0,cw:748,ch:420,q:80,w:748/pnczF9pRToCAECtEzduNUT.jpg",
    },
    {
      title: "Daily Saver",
      subtitle: "Grocery Discounts",
      color: "#fff3cc",
      btnBg: "#fff",
      btnColor: "#000",
      img: "https://i.ndtvimg.com/i/2017-02/fruits-and-vegetables_650x366_41486465566.jpg?im=FaceCrop,algorithm=dnn,width=140,height=105",
      border: "1px solid #333",
    },
    {
      title: "Must-Have",
      subtitle: "Snacks & Beverages",
      color: "#ffe0e0",
      btnBg: "#ff4d4d",
      btnColor: "#fff",
      img: "https://laxmiexportimport.com/wp-content/uploads/2024/09/Snacks-Beverages%E2%80%8B.jpg",
    },
    {
      title: "Best Value",
      subtitle: "Dairy & Bakery",
      color: "#fff8cc",
      btnBg: "#fff",
      btnColor: "#000",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-fresh-pastry-and-bakery-items-available-on-trays-image_2581269.jpg",
      border: "1px solid #333",
    },
    {
      title: "Trending Now",
      subtitle: "Chocolates",
      color: "#f3e8e8",
      btnBg: "#800000",
      btnColor: "#fff",
      img: "https://www.cocoahub.co.uk/cdn/shop/articles/Mars-Incorporated-Candy-Snickers-Milky-way-MMs-Twix.webp?v=1696494569&width=1100",
    },
  ].map((card, index) => (
    <div
      key={index}
      style={{
        flex: "1",
        background: card.color,
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        minWidth: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.6s ease",
        cursor: "pointer",
        opacity: 0,
        animation: `fadeInUp 0.8s ease ${(index * 0.1).toFixed(1)}s forwards`,
        border: card.border || "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <div style={{ flex: 1, marginRight: "10px" }}>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          {card.title}
        </h4>
        <p style={{ margin: "4px 0", fontSize: "12px", color: "#333" }}>
          {card.subtitle}
        </p>
        <button
          style={{
            background: card.btnBg,
            border: card.border || "none",
            color: card.btnColor,
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Order Now
        </button>
      </div>
      <img
        src={card.img}
        alt={card.title}
        style={{
          height: "70px",
          borderRadius: "8px",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  ))}
</div>

<style>
{`
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
`}
</style>

        

        {/* AI */}
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff3e0",
    borderRadius: "16px",
    padding: "20px 25px",
    width: "54%",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    animation: "fadeInUp 1s ease forwards",
  }}
>
  
  <div style={{ flex: 1, animation: "slideInLeft 1s ease forwards" }}>
    <h3
      style={{
        margin: "0 0 10px 0",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
      }}
    >
      Your personal grocery assistant
    </h3>
    <p
      style={{
        margin: "0 0 15px 0",
        fontSize: "14px",
        color: "#444",
        lineHeight: "1.5",
      }}
    >
      Find recipes, get recommendations, and shop smarter with AI
    </p>
    <button
      style={{
        background:
          "linear-gradient(45deg, #f7931e, #ffb347, #f7931e)",
        backgroundSize: "300% 300%",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        animation: "gradientMove 4s infinite linear",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 0 12px rgba(247,147,30,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Try Now
    </button>
  </div>

 
  <div
    style={{
      flex: 2,
      display: "flex",
      gap: "15px",
      justifyContent: "flex-end",
      animation: "slideInRight 1s ease forwards",
    }}
  >
    {[
      {
        title: "Recipe Suggestions",
        img: "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        btn: "Browse",
      },
      {
        title: "Personalized Picks",
        img: "https://laxmiexportimport.com/wp-content/uploads/2024/09/Snacks-Beverages%E2%80%8B.jpg",
        btn: "View",
      },
      {
        title: "Meal Planning",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg",
        btn: "Try Search",
      },
    ].map((card, i) => (
      <div
        key={i}
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "14px",
          textAlign: "center",
          flex: 1,
          width: "130px",
          height: "130px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          transition:
            "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.8s ease",
          opacity: 0,
          animation: `fadeInUp 0.8s ease ${(i * 0.2).toFixed(1)}s forwards`,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
        }}
      >
        <h4
          style={{
            fontSize: "14px",
            margin: "0 0 8px 0",
            color: "#333",
          }}
        >
          {card.title}
        </h4>
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: "90px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <br />
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
            transition: "all 0.3s ease",
            width: "90px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ff9f2f";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f7931e";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {card.btn}
        </button>
      </div>
    ))}
  </div>

 
  <style>
    {`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      0% { opacity: 0; transform: translateX(30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    `}
  </style>
</div>


       
        <div style={{ marginTop: 28, animation: "fadeIn 1s ease-in-out" }}>
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
      }

      .product-card {
        transition: all 0.3s ease;
      }

      .product-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
      }

      .add-btn:hover {
        animation: pulse 0.6s ease;
      }
    `}
  </style>

  
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
    
  }}>
    <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Recommended for you</h3>
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: "green",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      See all →
    </div>
  </div>

  
  <div style={{
    display: "flex",
    gap: "24px",
    width: "100%",
    overflowX: "auto",
    paddingBottom: "10px"
  }}>
    {[
      {
        discount: "5%",
        image: "https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg",
        name: "Amul Dark Chocolate 70% Cocoa",
        qty: "200g",
        price: "₹180",
        oldPrice: "₹200",
        control: true,
      },
      {
        discount: "10%",
        image: "https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859",
        name: "Organic Almond Milk",
        qty: "1L",
        price: "₹280",
        oldPrice: "₹320",
        control: false,
      },
      {
        discount: "3%",
        image: "https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997",
        name: "Hybrid Tomato",
        qty: "500g",
        price: "₹25",
        oldPrice: "₹30",
        control: false,
      },
      {
        discount: "10%",
        image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg",
        name: "Broccoli",
        qty: "1 Piece",
        price: "₹50",
        oldPrice: "₹60",
        control: false,
      },
      {
        discount: "5%",
        image: "https://m.media-amazon.com/images/I/61b2Ae0EqML._UF350,350_QL80_.jpg",
        name: "Amul Dark Chocolate 70% Cocoa",
        qty: "200g",
        price: "₹180",
        oldPrice: "₹200",
        control: true,
      },
        {
        discount: "10%",
        image: "https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859",
        name: "Organic Almond Milk",
        qty: "1L",
        price: "₹280",
        oldPrice: "₹320",
        control: false,
      },
      {
        discount: "3%",
        image: "https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997",
        name: "Hybrid Tomato",
        qty: "500g",
        price: "₹25",
        oldPrice: "₹30",
        control: false,
      },
      {
        discount: "10%",
        image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg",
        name: "Broccoli",
        qty: "1 Piece",
        price: "₹50",
        oldPrice: "₹60",
        control: false,
      },
    ].map((item, index) => (
      <div
        key={index}
        className="product-card"
        style={{
          minWidth: "130px",
          background: "#fff",
          borderRadius: "12px",
          padding: "12px",
          position: "relative",
          boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px"
        }}>{item.discount}</div>

        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "90px",
            objectFit: "contain",
            marginTop: "25px",
            transition: "transform 0.3s ease",
          }}
        />

        <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>{item.name}</p>
        <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>{item.qty}</p>

        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>{item.price}</span>
          <span style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888"
          }}>{item.oldPrice}</span>
        </div>

       
        <div style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px"
        }}>
          {item.control ? (
            <>
              <button className="add-btn" style={{
                background: "green",
                color: "#fff",
                border: "none",
                padding: "2px 8px",
                cursor: "pointer"
              }}>–</button>
              <span style={{ padding: "0 8px", fontWeight: "bold" }}>01</span>
              <button className="add-btn" style={{
                background: "green",
                color: "#fff",
                border: "none",
                padding: "2px 8px",
                cursor: "pointer"
              }}>+</button>
            </>
          ) : (
            <button className="add-btn" style={{
              background: "green",
              color: "#fff",
              border: "none",
              padding: "2px 10px",
              cursor: "pointer"
            }}>+</button>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

        {/* FLASH SALE */}
        <div
  style={{
    marginTop: 28,
    padding: "18px 50px",
    borderRadius: 12,
    background: "linear-gradient(90deg,#ebfff3,#f8fff8)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
    animation: "fadeIn 1s ease-in-out",
  }}
>
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { color: #ff6b6b; transform: scale(1); }
        50% { color: #e53935; transform: scale(1.1); }
      }
      @keyframes cardFadeUp {
        0% { opacity: 0; transform: translateY(25px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .flash-card {
        transition: all 0.3s ease;
        animation: cardFadeUp 0.6s ease forwards;
      }
      .flash-card:hover {
        transform: scale(1.06);
        box-shadow: 0 8px 18px rgba(0,0,0,0.12);
      }
      .add-btn:hover {
        transform: scale(1.15);
        transition: 0.25s;
      }
    `}
  </style>

 
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 12,
    }}
  >
    <div
      style={{
        fontSize: 18,
        fontWeight: 500,
        color: "#ff8a65",
        marginLeft: "1px",
        marginTop: "1px",
        animation: "pulse 1.2s infinite",
      }}
    >
      <h5>Flash Sale</h5>
    </div>
    <div
      style={{
        color: "#ff6b6b",
        fontWeight: 700,
        marginRight: "15px",
        marginTop: "10px",
        animation: "pulse 1.2s infinite",
      }}
    >
     <h5> 02h 30m 02s</h5>
    </div>
  </div>

  
  <div
    style={{
      display: "flex",
      gap: "20px",
      overflowX: "auto",
      paddingBottom: 8,
      marginLeft: -30,
      marginRight: -30,
    }}
  >
    {/* Card 1 */}
    <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        10%
      </div>
      <img
        src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859"
        alt="Organic Almond Milk"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Organic <br /> Almond Milk
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹320
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        3%
      </div>
      <img
        src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997"
        alt="Hybrid Tomato"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Hybrid Tomato
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>
        500g
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹30
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
 <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        10%
      </div>
      <img
        src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859"
        alt="Organic Almond Milk"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Organic <br /> Almond Milk
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹320
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>


    <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        3%
      </div>
      <img
        src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997"
        alt="Hybrid Tomato"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Hybrid Tomato
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>
        500g
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹30
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div> <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        10%
      </div>
      <img
        src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859"
        alt="Organic Almond Milk"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Organic <br /> Almond Milk
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹320
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>

  
    <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        3%
      </div>
      <img
        src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997"
        alt="Hybrid Tomato"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Hybrid Tomato
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>
        500g
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹30
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div> <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        10%
      </div>
      <img
        src="https://mooala.com/cdn/shop/files/864524000102_front_1800x1800.jpg?v=1749139859"
        alt="Organic Almond Milk"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Organic <br /> Almond Milk
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>1L</p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹280</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹320
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>

    
    <div
      className="flash-card"
      style={{
        minWidth: "130px",
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "green",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "2px 6px",
          borderRadius: "6px",
        }}
      >
        3%
      </div>
      <img
        src="https://freshclub.co.in/cdn/shop/products/Tomato_hybrid_1kg.jpg?v=1660188997"
        alt="Hybrid Tomato"
        style={{
          width: "100%",
          height: "90px",
          objectFit: "contain",
          marginTop: "25px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ margin: "8px 0 2px 0", fontSize: "13px", fontWeight: "500" }}>
        Hybrid Tomato
      </p>
      <p style={{ margin: "0 0 6px 0", fontSize: "12px", color: "#666" }}>
        500g
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>₹25</span>
        <span
          style={{
            textDecoration: "line-through",
            fontSize: "12px",
            color: "#888",
          }}
        >
          ₹30
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "20px",
          overflow: "hidden",
          fontSize: "14px",
        }}
      >
        <button
          className="add-btn"
          style={{
            background: "green",
            color: "#fff",
            border: "none",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
   
  </div>
</div>


        {/*  BRANDS */}
        <div style={{ marginTop: 28 }}>
           <style>
    {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .brand-card {
        transition: all 0.4s ease;
      }

      .brand-card:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
      }

      .brand-img {
        transition: transform 0.5s ease;
      }

      .brand-img:hover {
        transform: rotate(3deg) scale(1.1);
      }
    `}
  </style>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12,animation: "fadeInUp 0.8s ease-in-out", }}>Top Brands</div> <br />
          <div style={{ display: "flex", gap: 70, width:"100%" }}>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: "10px", display: "flex", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out", }}>
              <img className="brand-img" src="https://cdn.slidesharecdn.com/ss_thumbnails/amul-140107204007-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds" alt="amul" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out" }}>
              <img className="brand-img" src="https://www.c1c.hu/Data/Sites/1/GalleryImages/partners/partners_mainpage/nestle-logo1.png" alt="nestle" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out" }}>
              <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUckWbbgWiea9OFBJyiSX8Ug7Bszom3JksXjDSp6UwUKePdNehuBSORAJAK9Byxb-ClVg&usqp=CAU" alt="mother" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out" }}>
              <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4eUb0fR8NkIBmb__DzgKVBfbocWDy2-7mg&s" alt="parag" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out" }}>
              <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUckWbbgWiea9OFBJyiSX8Ug7Bszom3JksXjDSp6UwUKePdNehuBSORAJAK9Byxb-ClVg&usqp=CAU" alt="mother" style={{ width: 120, objectFit: "contain" }} />
            </div>
            <div className="brand-card" style={{ width: 180, height: 100, background: "#fff", borderRadius: 12, display: "flex",  justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.03)",animation: "fadeInUp 1.2s ease-in-out" }}>
              <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4eUb0fR8NkIBmb__DzgKVBfbocWDy2-7mg&s" alt="parag" style={{ width: 120, objectFit: "contain" }} />
            </div>
          </div>
        </div>
<br /> <br /> 
<h3>Groceries & Kitchen</h3> <br />
        {/*  (Groceries & Kitchen) */}
       <div style={{ marginTop: "20px" }}>
  {[[
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
  ],
  [
    { title: "Cookware", img: "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1750352947/prod/content/dam/CRO-Images-2025/Home/CR-Home-InlineHero-Best-Cookware-Sets-0625" },
    { title: "Cutlery", img: "https://m.media-amazon.com/images/I/7155b16ETeL._UF350,350_QL80_.jpg" },
    { title: "Tableware", img:"https://m.media-amazon.com/images/I/71AaOLMchAL._UF894,1000_QL80_.jpg" },
    { title: "Kitchen Tools", img: "https://www.saltylemonsister.com/wp-content/uploads/50-Must-Have-Kitchen-Items-List.jpg" }, 
    { title: "Cleaning Supplies", img: "https://www.maid4condos.com/content/uploads/2018/10/2.jpg" },
    { title: "Specialty Items", img: "https://m.media-amazon.com/images/I/41y5udw9ESL._SR290,290_.jpg" },
  ]].map((list, j) => (
    <div
      key={j}
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "13px",
        paddingBottom: "15px",
        scrollBehavior: "smooth",
        animation: "fadeIn 1s ease",
      }}
    >
      {list.map((cat, i) => (
        <div
          key={i}
          style={{
            width: "130px",
            height: "170px",
            background: "#eaffea",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            animation: `slideUp 0.8s ease ${i * 0.1}s forwards`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
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
              background: "#f3fff8",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "115px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.2))",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      ))}
    </div>
  ))}
</div>


<style>
{`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
`}
</style>

    <br />
     {/*  Baby & Kids) */}
<h3>Baby & Kids</h3> <br />
       
      <div style={{ marginTop: "20px" }}>
  {[[
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
  ],
  [
    { title: "Cookware", img: "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1750352947/prod/content/dam/CRO-Images-2025/Home/CR-Home-InlineHero-Best-Cookware-Sets-0625" },
    { title: "Cutlery", img: "https://m.media-amazon.com/images/I/7155b16ETeL._UF350,350_QL80_.jpg" },
    { title: "Tableware", img:"https://m.media-amazon.com/images/I/71AaOLMchAL._UF894,1000_QL80_.jpg" },
    { title: "Kitchen Tools", img: "https://www.saltylemonsister.com/wp-content/uploads/50-Must-Have-Kitchen-Items-List.jpg" }, 
    { title: "Cleaning Supplies", img: "https://www.maid4condos.com/content/uploads/2018/10/2.jpg" },
    { title: "Specialty Items", img: "https://m.media-amazon.com/images/I/41y5udw9ESL._SR290,290_.jpg" },
  ]].map((list, j) => (
    <div
      key={j}
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "13px",
        paddingBottom: "15px",
        scrollBehavior: "smooth",
        animation: "fadeIn 1s ease",
      }}
    >
      {list.map((cat, i) => (
        <div
          key={i}
          style={{
            width: "130px",
            height: "170px",
            background: "#eaffea",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            flexShrink: 0,
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            animation: `slideUp 0.8s ease ${i * 0.1}s forwards`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
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
              background: "#f3fff8",
              borderBottomLeftRadius: "50% 20px",
              borderBottomRightRadius: "50% 20px",
              height: "115px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.2))",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      ))}
    </div>
  ))}
</div>


<style>
{`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
`}
</style>
</div>
        {/* FOOTER */}
        <footer
  style={{
    backgroundColor: "#15ab4eff",
    color: "white",
    padding: "35px 60px",
    marginTop: "40px",
    minHeight: "250px",
    animation: "fadeIn 1s ease-in-out",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "40px",
      alignItems: "flex-start",
    }}
  >
    
    <div>
      <h1
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "60px",
          fontWeight: "700",
          marginBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        POKAK
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        TECHNOLOGIES PVT LTD
      </p>

     
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "22px",
          marginTop: "10px",
        }}
      >
        <i
          class="fa-brands fa-instagram"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffb3b3";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></i>
        <i
          class="fa-brands fa-facebook-f"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#b3e0ff";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></i>
        <i
          class="fa-brands fa-x-twitter"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#d9d9d9";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></i>
        <i
          class="fa-brands fa-linkedin-in"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#b3d9ff";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></i>
      </div>
    </div>

    
    <div>
      <h4 style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "15px" }}>
        Quick Links
      </h4>
      {["Home", "Rental", "Paying Guest", "Buying", "Offers", "Bookings"].map(
        (item, i) => (
          <p
            key={i}
            style={{
              margin: "6px 0",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4ffd4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            {item}
          </p>
        )
      )}
    </div>


    <div>
      <h4 style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "15px" }}>
        Customer Care
      </h4>
      {[
        "Help Center",
        "FAQ",
        "Contact Support",
        "Cancellation & Refund Policies",
        "Terms & Conditions",
        "Privacy & Policies",
      ].map((item, i) => (
        <p
          key={i}
          style={{
            margin: "6px 0",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#d4ffd4")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          {item}
        </p>
      ))}
    </div>
  </div>


  <div
    style={{
      textAlign: "center",
      fontSize: "14px",
      color: "#e0f7e0",
      marginTop: "30px",
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: "15px",
      letterSpacing: "0.5px",
    }}
  >
    © 2025 Pokak Technologies Pvt Ltd. All Rights Reserved.
  </div>


  <style>
    {`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    `}
  </style>
</footer>


      
    </div>
    </>
  )
}

export default App
