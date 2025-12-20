import { ButtonPrimary } from "@/components/ui";
import { Helper } from "@/lib/helper";
import { ArrowRight, Gift, Shield, Tag, Truck } from "lucide-react";

function SummaryOrder({
  subtotal,
  shipping,
  tax,
  discount,
  total,
}: {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}) {
  return (
    <div className="lg:w-[400px]">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-6">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Tóm tắt đơn hàng</h3>
        </div>

        <div className="p-6 space-y-4">
          {/* Price Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Tạm tính</span>
              <span className="font-medium">
                {Helper.formatCurrency(subtotal)}
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gray-500" />
                <span>Phí vận chuyển</span>
              </div>
              <span className="font-medium">
                {shipping === 0 ? (
                  <span className="text-green-600 font-semibold">MIỄN PHÍ</span>
                ) : (
                  Helper.formatCurrency(shipping)
                )}
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Thuế VAT (8%)</span>
              <span className="font-medium">
                {tax.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>Giảm giá</span>
                </div>
                <span className="font-semibold">
                  -{Helper.formatCurrency(discount)}
                </span>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                Tổng cộng
              </span>
              <span className="text-2xl font-bold text-primary">
                {Helper.formatCurrency(total)}
              </span>
            </div>
          </div>

          <ButtonPrimary>
            Tiến hành thanh toán
            <ArrowRight className="w-5 h-5" />
          </ButtonPrimary>

          {/* Trust Badges */}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Thanh toán bảo mật SSL</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="w-4 h-4 text-blue-500" />
              <span>Miễn phí vận chuyển đơn từ 500.000đ</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Gift className="w-4 h-4 text-purple-500" />
              <span>Tặng kèm thiệp chúc mừng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryOrder;
