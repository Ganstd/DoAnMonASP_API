import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    // Ví dụ: Xóa token JWT từ localStorage và chuyển hướng người dùng đến trang đăng nhập
    localStorage.removeItem('jwt');
    window.location.href = '/admin/login'; // Chuyển hướng đến trang đăng nhập
  };

  return (
    <button onClick={handleLogout}>
      Đăng Xuất
    </button>
  );
};

export default Logout;
