"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithubSquare, FaGlobe } from "react-icons/fa";

function ModalContent() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const title = searchParams.get("title");
  const pathname = usePathname();
  const router = useRouter();

  const project = projectsData.find((p) => p.title === title);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCloseModal = () => {
    router.push(pathname);
  };

  useEffect(() => {
    if (modal) {
      setScrollPosition(window.scrollY); // Capture scroll position
    }
  }, [modal]);

  useEffect(() => {
    if (!modal) {
      window.scrollTo(0, scrollPosition); // Restore scroll position
    }
  }, [modal, scrollPosition]);

  return (
    <>
      {modal && project && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-4">
                {project.imgModal1 && (
                  <div>
                    <Image
                      src={project.imgModal1}
                      alt="Modal Image 1"
                      width={300}
                      height={200}
                      unoptimized
                    />
                  </div>
                )}
                {project.imgModal2 && (
                  <div>
                    <Image
                      src={project.imgModal2}
                      alt="Modal Image 2"
                      width={300}
                      height={200}
                      unoptimized
                    />
                  </div>
                )}
              </div>
              <div className="flex space-x-2 mb-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.more}</p>
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-red-500 text-white p-2 mt-4"
              >
                Close Modal
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

function Modal() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalContent />
    </Suspense>
  );
}

export default Modal;
