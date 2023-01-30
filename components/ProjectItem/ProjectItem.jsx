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

      {/* Bán hàng  */}
      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://pyramidpad.io/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Tổ hợp Web marketplace,launchpad web,...
              </h4>
              <img src="/py.png" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Tổ hợp 3 website</h5>

          <Link href="https://marketplace.pyramidwalk.com/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link web marketplace
              </h5>
            </a>
          </Link>
          <Link href="https://pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Pyramid web
              </h5>
            </a>
          </Link>
          <Link href="https://launchpad.pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Launchpad web
              </h5>
            </a>
          </Link>

          <p>- Để trải nghiệm web bạn cần có ví metamask để đăng nhập</p>

          <p>
            - 3 website được xây dựng với reactjs, tailwindcss và nhiều thư viện
            khác,...
          </p>
          <p>
            - Database sử dụng cho marketplace, launchpad là moralis và 1 số lưu
            trữ trên blockchain
          </p>
        </div>
      </div>
      {/* Reactjs Travel web  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://mklabs.finance/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                MKLABS
              </h4>
              <img src="/mklab.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">MKLABS</h5>
          <p>- Để trải nghiệm web bạn cần có ví metamask để đăng nhập</p>
          <p>- ✨ Giao diện làm với scss</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://247cryp.to/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                247 Crypto
              </h4>
              <img src="/cryp.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">247CRYP</h5>

          <p>- ✨ Giao diện làm với Scss/ và 1 số thư viện khác</p>
        </div>
      </div>

      {/* tiktok blog  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://tiktok-blue.vercel.app/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                TIKTOK BLOG
              </h4>
              <img src="/tiktok.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">TIKTOK BLOG</h5>
          <p>- Tự lên ý tưởng thiết kế giao diện bằng figma, và hiện thực</p>
          <p>
            - Hiện tại chưa phát triển admin manager cho web cũng như database
          </p>

          <p>- ✨ Giao diện làm với tailwindcss</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://bundaurengreng.vn/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Bún Đậu RengReng
              </h4>
              <img src="/bun.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">
            Trang web giới thiệu cho 1 cửa hàng bún đậu mắm tôm
          </h5>
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
    </>
  );
}

export default ProjectItem;
