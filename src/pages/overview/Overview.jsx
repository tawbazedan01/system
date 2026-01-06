import React from 'react'

export default function Overview() {
    return (
        <div
            style={{
                display: "flex",           // لتفعيل flex
                justifyContent: "center",  // تمركز أفقي
                alignItems: "center",      // تمركز عمودي
                height: "100vh",           // ارتفاع كامل الشاشة
                fontSize: "48px",          // حجم الخط كبير
                fontWeight: "bold",        // خط غامق
                textAlign: "center",       // محاذاة النص
            }}
        >
            Overview
        </div>
    )
}
