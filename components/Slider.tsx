"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Анализ текущего состояния карьеры",
    description:
      "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
    icon: "/icons/1analiz.png",
  },
  {
    id: 2,
    title: "Поиск работы",
    description:
      "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
    icon: "/icons/2Exclude.png",
  },
  {
    id: 3,
    title: "Сопроводительные письма и резюме",
    description:
      "Поможем сформировать профессиональный портфель, который выделит вас среди других кандидатов.",
    icon: "/icons/3Search.png",
  },
  {
    id: 4,
    title: "Тренинг по презентации личного бренда",
    description:
      "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
    icon: "/icons/4Train.png",
  },
  {
    id: 5,
    title: "Подготовка к собеседованию",
    description: "Научим говорить о себе кратко, ярко и профессионально.",
    icon: "/icons/5preparation.png",
  },
  {
    id: 6,
    title: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться соискателю и работодателю.",
    icon: "/icons/6stemps.png",
  },
];

const Slider: React.FC = () => {
  const [currentSlides, setCurrentSlides] = useState([...slides]);

  const handleNext = () => {
    setCurrentSlides((prevSlides) => {
      const firstSlide = prevSlides[0];
      return [...prevSlides.slice(1), firstSlide];
    });
  };

  const handlePrev = () => {
    setCurrentSlides((prevSlides) => {
      const lastSlide = prevSlides[prevSlides.length - 1];
      return [lastSlide, ...prevSlides.slice(0, -1)];
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Хедер для мобильных */}
      <div className="flex lg:hidden justify-between  px-4 py-2 mb-6">
        <div className="flex flex-col items-start">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <img src="/icons/Stemps.png" alt="Menu Icon" className="h-4 w-4" />
          </div>
          <span className="border-b border-gray-300 pb-2 text-[#8977F3] font-medium text-2xl mt-1">
            1.0
          </span>
          <h2 className="border-b border-gray-300 pb-2 text-[#8977F3] text-2xl font-semibold mt-2">
            Наши услуги
          </h2>
        </div>
        <div>
          <button className="px-4 py-1 bg-black text-white rounded-md text-sm">
            Меню
          </button>
        </div>
      </div>

      {/* Хедер для десктопа */}
      <header className="hidden lg:block w-full bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <img src="/icons/Stemps.png" alt="STEMPS Logo" />
            </div>
            <span className="text-lg font-bold text-black">STEMPS</span>
          </div>
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              О школе
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              Курсы
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              Библиотека
            </a>
          </nav>
          <button className="flex items-center space-x-2">
            <span className="text-lg font-medium text-black">Вход</span>
            <div>
              <img src="/icons/Enter.svg" alt="Menu Icon" className="h-5 w-5" />
            </div>
          </button>
        </div>
        <div className="flex justify-between items-left  px-6 py-2 space-x-4">
          <span className="text-purple-600 text-2xl font-semibold">1.0</span>
          <span className="text-purple-600 text-2xl font-semibold">
            Наши услуги
          </span>
          <span className="text-purple-500 text-lg font-semibold"></span>
        </div>
      </header>

      {/* Контент */}
      <main className="w-full px-4 py-6">
        {/* Слайдер для десктопа */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 "
              initial={false}
              animate={{ x: `0%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {currentSlides.slice(0, 4).map((slide) => (
                <div
                  key={slide.id}
                  className="w-[24%] flex-shrink-0 bg-gray-100 bg-opacity-70 rounded-lg shadow-md p-4 flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={slide.icon}
                      alt={slide.title}
                      className="h-10 w-10"
                    />
                    <h3 className="text-base font-semibold text-black">
                      {slide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Навигация для десктопа */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Далее
            </button>
          </div>
        </div>

        {/* Слайдер для мобильных */}
        <div className="lg:hidden">
          <div className="relative bg-gray-100 bg-opacity-70 rounded-lg shadow-md w-full max-w-md min-h-[180px]">
            <AnimatePresence>
              {currentSlides.slice(0, 1).map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-full flex flex-col items-center space-x-4 p-4"
                >
                  <div className="flex items-start justify-start space-x-4">
                    <img
                      src={slide.icon}
                      alt={slide.title}
                      className="h-12 w-12 flex-shrink-0"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {slide.title}
                    </h3>
                  </div>
                  <div>
                    <p className="mt-4 text-sm text-gray-600">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Навигация для мобильных */}
          <div className="flex justify-between mt-4 px-4 w-full max-w-md">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Далее
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
