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
          <p>- Team Size: 1</p>
          <p>- Timeline: 3 day</p>
          <p>
            - Build a demo version for a small website with product list,
            detail, cart and register/login pages.
          </p>
          <p>- Build a product filtering function similar to the Tiki page</p>
          <p>
            - Use React Hook Form and Yup for form validation in sign up and
            login.
          </p>

          <p>- ✨ Interface made with Material UI</p>
        </div>
      </div>

      {/* soccer world  */}
      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://game.soccerworld.finance/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                SoccerWorld Blockchain GameFi
              </h4>
              <div className="flex overflow-x-scroll">
                <img src="sc1.PNG" className="w-[90%]" alt="newstore" />
                <img src="scc.PNG" className="flex-1" alt="newstore" />
                <img src="sc.PNG" className="flex-1" alt="newstore" />
              </div>
            </a>
          </Link>
          <h5 className="font-bold my-2">SoccerWorld Blockchain GameFi</h5>
          <p>- Team size: 3.</p>
          <p>- Timeline: about 2.5 month (3 versions)</p>
          <p>- Responsiable: </p>
          <p> + Team lead: Control task list/timeline/team report</p>
          <p> + Support team members if they have problems</p>
          <p> + Build Moralis Database for game systems and smart contracts</p>
          <p> + Build feature game island/login</p>
          <p> + Interact/Test smart contract before team use</p>
          <p>- To experience the web, you need a MetaMask wallet to log in.</p>
          <p>
            - Websites built with Reactjs, scss/css, and various other libraries
          </p>
          <p>- The databases Moralis and some storage on the blockchain</p>

          <Link href="https://launchpad.pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Launchpad web
              </h5>
            </a>
          </Link>
          <p>- Team size: 2.</p>
          <p>- Responsiable: </p>
          <p>
            {" "}
            + Join to update Ui, control and test modular interact contract
          </p>
        </div>
      </div>

      {/* soccer home  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://247cryp.to/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                SoccerWorld
              </h4>
              <img src="/dd.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">SoccerWorld</h5>
          <p>- Team size: 1.</p>
          <p>- Timeline: 2021</p>
          <p>- Responsiable: </p>
          <p> + Build Client with Reactjs</p>
          <p>- ✨ Interface made with taiwindcss and other libraries</p>
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
          <p>- Team size: 1.</p>
          <p>- Timeline: 1 day</p>
          <p>- Responsiable: </p>
          <p> + Build Client with Reactjs</p>
          <p>- ✨ Interface made with Scss/ and other libraries</p>
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
          <p>- Team size: 1</p>
          <p>- Timeline: 2 day</p>
          <p>
            - I came up with the idea of ​​interface design with figma, and
            implemented the website
          </p>
          <p>
            - Currently not developed an admin manager for the web as well as
            the database
          </p>

          <p>- ✨ Interface made with tailwindcss</p>
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
            Introduction website for a store bún đậu mắm tôm
          </h5>
          <p>- Team size: 1 (freeland)</p>
          <p>- Timeline: about 3.5 day</p>
          <p>- Website built using Reactjs, taiwindcss</p>
        </div>
      </div>

      {/* Pyramid  */}
      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://pyramidpad.io/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Web marketplace, web launchpad, etc.
              </h4>
              <img src="/py.png" alt="newstore" />
            </a>
          </Link>
          <h5 className="font-bold my-2">3 website</h5>
          <p>- To experience the web, you need a MetaMask wallet to log in.</p>
          <p>
            - 3 websites built with Reactjs, Tailwindcss, and various other
            libraries
          </p>
          <p>
            - The databases used for the marketplace and launchpad are Moralis
            and some storage on the blockchain
          </p>
          <p>- Timeline for all project about 3 month (many version)</p>
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
          <p>- Team size: 1.</p>
          <p>- Responsiable: </p>
          <p> + Build Moralis Database</p>
          <p> + Build Client with Reactjs</p>
          <p> + Interact with smart contract</p>

          <Link href="https://launchpad.pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Launchpad web
              </h5>
            </a>
          </Link>
          <p>- Team size: 2.</p>
          <p>- Responsiable: </p>
          <p>
            {" "}
            + Join to update Ui, control and test modular interact contract
          </p>
          <h5 className="font-medium  my-1 text-blue-500">
            1 App ready on AppStore/ChPlay (Pyramid walk2earn) (Built using
            React Native)
          </h5>
          <p>- Team size: 2.</p>
          <p>- Responsiable: </p>
          <p> + Join to update Ui</p>
          <p> + Fix logic caculate distance run of user</p>
          <p> + Add interact with api, load data for app</p>
        </div>
      </div>
      {/* Mklabs  */}
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
          <p>- Team size: 3.</p>
          <p>- Timeline: 2021</p>
          <p>- Responsiable: </p>
          <p> + Team lead</p>
          <p> + Build Moralis Database for feature predition</p>
          <p> + Build Predition Feature</p>
          <p> + Support member in team</p>
          <p>- To experience the web, you need a MetaMask wallet to log in</p>
          <p>- ✨ Interface made with scss</p>
        </div>
      </div>

      {/* Unimart unitop  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://bao.unitopcv.com" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                mini website
              </h4>
              <img src="/unimart.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Project Laravel + MySQL</h5>
          <p>- Team size: 1 </p>
          <p>- Timeline: 2019</p>
          <p>
            - Build the function of registration, login, authorization,
            automatic mailing order confirmation, admin can track order, update
            status the menu row, collect statistical data through charts, post
            new, update, Editing articles, managing users,...
          </p>

          <p>- ✨ Interface made with Bootstrap</p>
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
                Convert PSD file to Html/Css
              </h4>
              <img src="/vietsoz.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Convert PSD file to Html/Css</h5>
          <p>- Team size: 1.</p>
          <p>- Timeline: 2019</p>
          <p>- ✨ Interface made with Html/Css</p>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
