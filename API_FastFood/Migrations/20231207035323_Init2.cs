using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_FastFood.Migrations
{
    public partial class Init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PromotionDetails_Combos_ComboId",
                table: "PromotionDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_PromotionDetails_Products_ProductId",
                table: "PromotionDetails");

            migrationBuilder.DropIndex(
                name: "IX_PromotionDetails_ComboId",
                table: "PromotionDetails");

            migrationBuilder.DropColumn(
                name: "ComboId",
                table: "PromotionDetails");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "PromotionDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Discount",
                table: "PromotionDetails",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PromotionDetails_Products_ProductId",
                table: "PromotionDetails",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PromotionDetails_Products_ProductId",
                table: "PromotionDetails");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "PromotionDetails",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<decimal>(
                name: "Discount",
                table: "PromotionDetails",
                type: "decimal(18,2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<int>(
                name: "ComboId",
                table: "PromotionDetails",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PromotionDetails_ComboId",
                table: "PromotionDetails",
                column: "ComboId");

            migrationBuilder.AddForeignKey(
                name: "FK_PromotionDetails_Combos_ComboId",
                table: "PromotionDetails",
                column: "ComboId",
                principalTable: "Combos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PromotionDetails_Products_ProductId",
                table: "PromotionDetails",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");
        }
    }
}
