import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectItem({}) {
  return (
    <>
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://new-store-87e2b.firebaseapp.com/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Mini Store
              </h4>
              <img src="/newstore.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Project Reactjs + Strapi api</h5>
          <p>
            - Xây dựng demo một website nhỏ với các trang Danh sách sản phẩm,
            Chi tiết, Giỏ hàng, và đăng ký đăng nhập.
          </p>
          <p>- Xây dựng chức năng lọc sản phẩm theo mẫu trang Tiki.</p>
          <p>
            - Dùng React Hook Form và Yup để thực hiện Validation cho form đăng
            kí, đăng nhập.
          </p>
          <p>- ✨ Giao diện làm với Material Ui</p>
        </div>
      </div>

      {/* Reactjs Travel web  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://travel-web-3e599.firebaseapp.com/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Blog Du Lịch
              </h4>
              <img src="/dulich.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">
            Project Reactjs + RealTime Database Firebase ( google )
          </h5>
          <p>
            - Xây dựng demo một Blog website nhỏ chia sẻ các bài viết về du
            lịch, những bức ảnh checkin thú vị.
          </p>
          <p>
            - Xây dựng chức năng đăng ký, đăng nhập, phân quyền, admin có thể
            đăng mới, cập nhật, chỉnh sửa bài viết,...
          </p>
          <p>
            - Dùng React Hook Form để thực hiện Validation cho form đăng kí,
            đăng nhập, form thêm bài viết, kiểm tra ảnh được upload,...
          </p>
          <p>- ✨ Giao diện làm với Material Ui</p>
        </div>
      </div>

      {/* Bán hàng  */}
      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://webapp-six-omega.vercel.app/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                WebSite bán Hàng
              </h4>
              <img src="/store.PNG" alt="newstore" />
            </a>
          </Link>
          <h3 className="text-red-600">Hiện đang được cập nhật</h3>
          <h5 className="text-red-600">Đang cập nhật lại...</h5>
          <h5 className="font-bold my-2">
            WebSite bán Quần áo sử dụng Nextjs FrameWork + Material Ui
          </h5>

          <p>
            - Sử dụng Nextjs để tối ưu hóa SEO cho khách hàng, kèm theo một số
            chức năng để đăng sản phẩm, cập nhật, khuyến mãi,..
          </p>

          <p>- ✨ Giao diện làm với Material Ui ➡ TailWindCss</p>
        </div>
      </div>
      {/* Unimart unitop  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://bao.unitopcv.com" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                mini website thương mại điện tử
              </h4>
              <img src="/unimart.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Project Laravel + MySQL</h5>
          <p>- Xây dựng demo một website nhỏ bán điện thoại di động.</p>
          <p>
            - Xây dựng chức năng đăng ký, đăng nhập, phân quyền,tự động gửi mail
            xác nhận đặt hàng, admin có thể theo dõi đơn hàng, cập nhật tình
            trạng đơn hàng, thống kê doanh thu qua biểu đồ, đăng mới, cập nhật,
            chỉnh sửa bài viết,quản lí người dùng,...
          </p>

          <p>- ✨ Giao diện làm với Bootstrap</p>
        </div>
      </div>

      {/* Theme newspaper  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link
            href="https://vuongquocbao98.github.io/template-newspaper/"
            passHref
          >
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Cắt giao diện từ PSD sang Html/Css
              </h4>
              <img src="/vietsoz.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Cắt giao diện Html/Css</h5>
          <p>
            - Cắt giao diện từ file PSD có sẵn sang Html/Css theo đúng kích
            thước, font chữ theo file đã cho.
          </p>

          <p>- ✨ Giao diện làm với Html/Css</p>
        </div>
      </div>

      {/* giao diện tạp chí  */}
      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link
            href="https://vuongquocbao98.github.io/finnal-template/"
            passHref
          >
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Cắt giao diện từ PSD sang Html bằng Bootstrap
              </h4>
              <img src="/giay.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Cắt giao diện Html bằng Bootstrap</h5>
          <p>
            - Cắt giao diện từ file PSD có sẵn sang Html sử dụng Bootstrap theo
            đúng kích thước, font chữ theo file đã cho.
          </p>

          <p>- ✨ Giao diện làm với Bootstrap</p>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
