'use client';

import { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// 注册Chart.js组件和数据标签插件
Chart.register(...registerables, ChartDataLabels);

/**
 * 带阴影和数据标签的折线图组件
 * @param {Object} props - 组件属性
 * @param {string} props.title - 图表标题
 * @param {Array} props.xLabels - X轴标签数组
 * @param {Array} props.dataSets - 数据集数组，数组长度决定线条数量
 * @param {number} [props.yStepSize=10] - Y轴步长
 * @param {number} [props.height=400] - 图表高度
 */
const LineChartWithShadows = ({
  title,
  xLabels,
  dataSets = [], // 默认为空数组，避免无数据时出错
  yStepSize = 10,
  height = 400,
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // 组件挂载或数据更新时创建/更新图表
  useEffect(() => {
    // 销毁已存在的图表实例
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // 只有当存在画布元素和数据集时才创建图表
    if (chartRef.current && dataSets.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      
      // 创建图表实例
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          // 只在X轴最后显示"Stroke"，其他位置用空字符串占位
          labels: xLabels.map(() => '').concat('Stroke'),
          datasets: dataSets.map((set, index) => {
            // 为每条线创建独立的渐变阴影
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, `${set.borderColor}33`); // 带透明度的颜色
            gradient.addColorStop(1, `${set.borderColor}05`); // 更透明的颜色
            
            return {
              ...set,
              backgroundColor: gradient,
              borderWidth: 3,
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: set.borderColor,
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4,
              fill: true,
              datalabels: {
                display: false
              }
            };
          })
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true, // 启用点样式自定义
                pointStyle: 'line', // 将点样式改为线条
                boxWidth: 15, // 调整线条长度（默认是圆圈直径，这里作为线条长度）
                font: {
                  family: 'Inter, sans-serif',
                  size: 14,
                  weight: 'bold'
                }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              titleColor: '#1E293B',
              bodyColor: '#64748B',
              borderColor: 'rgba(226, 232, 240, 0.8)',
              borderWidth: 1,
              padding: 12,
              boxPadding: 6,
              usePointStyle: true,
            },
            datalabels: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                // 显示X轴标签（只显示最后一个"Stroke"）
                display: true,
                font: {
                  family: 'Inter, sans-serif'
                }
              },
              // 显示X轴线
              border: {
                display: true
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: yStepSize,
                font: {
                  family: 'Inter, sans-serif'
                },
                callback: function(value) {
                  if (value === 30) {
                    return 'damping force';
                  }
                  return value;
                }
              },
              grid: {
                color: 'rgba(226, 232, 240, 0.6)'
              }
            }
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuart'
          }
        }
      });
    }

    // 组件卸载时销毁图表
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [xLabels, dataSets, yStepSize, height]);

  // 当没有数据时显示提示信息
  if (dataSets.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-1/2">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex items-center justify-center h-[400px] text-gray-500">
          暂无数据
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl w-3/4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      <div className="relative" style={{ height: `${height}px`, width: '100%' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default LineChartWithShadows;