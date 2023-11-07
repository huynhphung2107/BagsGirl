Create database [FashionBagsEcommerceDB]
USE [FashionBagsEcommerceDB]

GO
/****** Object:  Table [dbo].[bill_details]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bill_details](
	[bill_detail_id] [uniqueidentifier] NOT NULL,
	[bill_id] [uniqueidentifier] NULL,
	[product_detail_id] [uniqueidentifier] NULL,
	[amount] [int] NULL,
	[price] [money] NULL,
 CONSTRAINT [PK_bill_detail] PRIMARY KEY CLUSTERED 
(
	[bill_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bills]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bills](
	[bill_id] [uniqueidentifier] NOT NULL,
	[staff_id] [uniqueidentifier] NULL,
	[customer_id] [uniqueidentifier] NULL,
	[voucher_id] [uniqueidentifier] NULL,
	[bill_code] [nvarchar](50) NULL,
	[bill_create_date] [datetime] NULL,
	[bill_date_payment] [datetime] NULL,
	[bill_ship_date] [datetime] NULL,
	[bill_receiver_date] [datetime] NULL,
	[bill_total_price] [money] NULL,
	[product_amount] [int] NULL,
	[bill_price_after_voucher] [money] NULL,
	[shipping_address] [nvarchar](50) NULL,
	[billing_adress] [nvarchar](50) NULL,
	[receiver_name] [nvarchar](50) NULL,
	[ship_price] [money] NULL,
	[order_email] [nvarchar](50) NULL,
	[order_phone] [nvarchar](50) NULL,
	[payment_method] [int] NULL,
	[bill_note] [nvarchar](50) NULL,
	[bill_status] [int] NULL,
 CONSTRAINT [PK_bill] PRIMARY KEY CLUSTERED 
(
	[bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[brands]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brands](
	[brand_id] [uniqueidentifier] NOT NULL,
	[brand_code] [varchar](20) NULL,
	[brand_name] [nvarchar](50) NULL,
	[brand_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[brand_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[buckle_types]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[buckle_types](
	[buckle_type_id] [uniqueidentifier] NOT NULL,
	[buckle_type_code] [varchar](20) NULL,
	[buckle_type_name] [nvarchar](50) NULL,
	[buckle_type_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[buckle_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cart_details]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart_details](
	[cart_id] [uniqueidentifier] NOT NULL,
	[product_detail_id] [uniqueidentifier] NOT NULL,
	[amount] [int] NULL,
	[price] [float] NULL,
	[price_after_discount] [float] NULL,
 CONSTRAINT [PK_cart_detail] PRIMARY KEY CLUSTERED 
(
	[cart_id] ASC,
	[product_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[carts]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[carts](
	[cart_id] [uniqueidentifier] NOT NULL,
	[customer_id] [uniqueidentifier] NULL,
	[cart_code] [nvarchar](50) NULL,
	[cart_create_time] [datetime] NULL,
	[cart_payment_time] [datetime] NULL,
	[cart_note] [nvarchar](50) NULL,
	[cart_status] [int] NULL,
 CONSTRAINT [PK_cart] PRIMARY KEY CLUSTERED 
(
	[cart_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[colors]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[colors](
	[color_id] [uniqueidentifier] NOT NULL,
	[color_code] [varchar](20) NULL,
	[color_name] [nvarchar](50) NULL,
	[color_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[color_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compartments]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compartments](
	[compartment_id] [uniqueidentifier] NOT NULL,
	[compartment_code] [varchar](20) NULL,
	[compartment_name] [nvarchar](50) NULL,
	[compartment_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[compartment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[customers]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[customers](
	[customer_id] [uniqueidentifier] NOT NULL,
	[customer_points] [int] NULL,
	[user_id] [uniqueidentifier] NULL,
	[customer_status] [int] NULL,
 CONSTRAINT [PK_customer] PRIMARY KEY CLUSTERED 
(
	[customer_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[history_shift_bill]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[history_shift_bill](
	[history_shift_bill_id] [uniqueidentifier] NOT NULL,
	[bill_id] [uniqueidentifier] NULL,
	[shift_staff_id] [uniqueidentifier] NULL,
	[money] [float] NULL,
	[history_shift_bill_note] [nvarchar](50) NULL,
	[create_time] [datetime] NULL,
	[history_shift_bill_status] [int] NULL,
 CONSTRAINT [PK_history_shift_bill] PRIMARY KEY CLUSTERED 
(
	[history_shift_bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[images]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[images](
	[image_id] [uniqueidentifier] NOT NULL,
	[image_code] [varchar](20) NULL,
	[image_name] [nvarchar](50) NULL,
	[image_url] [nvarchar](max) NULL,
	[product_id] [uniqueidentifier] NOT NULL,
	[isPrimary] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[image_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[materials]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[materials](
	[material_id] [uniqueidentifier] NOT NULL,
	[material_code] [varchar](20) NULL,
	[material_name] [nvarchar](50) NULL,
	[material_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[material_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[producers]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[producers](
	[producer_id] [uniqueidentifier] NOT NULL,
	[producer_code] [varchar](20) NULL,
	[producer_name] [nvarchar](50) NULL,
	[producer_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[producer_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product_details]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_details](
	[product_detail_id] [uniqueidentifier] NOT NULL,
	[product_id] [uniqueidentifier] NULL,
	[color_id] [uniqueidentifier] NULL,
	[type_id] [uniqueidentifier] NULL,
	[material_id] [uniqueidentifier] NULL,
	[size_id] [uniqueidentifier] NULL,
	[compartment_id] [uniqueidentifier] NULL,
	[buckle_type_id] [uniqueidentifier] NOT NULL,
	[producer_id] [uniqueidentifier] NULL,
	[import_price] [money] NULL,
	[retail_price] [money] NULL,
	[amount] [int] NULL,
	[describe] [nvarchar](max) NULL,
	[product_detail_status] [int] NULL,
 CONSTRAINT [PK_product_detail] PRIMARY KEY CLUSTERED 
(
	[product_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[product_id] [uniqueidentifier] NOT NULL,
	[product_code] [varchar](20) NULL,
	[product_name] [nvarchar](50) NULL,
	[product_status] [int] NULL,
	[brand_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK__balo__3213E83F936392EB] PRIMARY KEY CLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[role_id] [uniqueidentifier] NOT NULL,
	[role_code] [varchar](50) NULL,
	[role_name] [nvarchar](50) NULL,
	[role_status] [int] NULL,
 CONSTRAINT [PK_role] PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[shift_staffs]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[shift_staffs](
	[shift_staff_id] [uniqueidentifier] NOT NULL,
	[shift_staff_code] [nvarchar](50) NULL,
	[shift_staff_start_time] [datetime] NULL,
	[shift_staff_end_time] [datetime] NULL,
	[shift_staff_create_date] [date] NULL,
	[shift_first_money] [float] NULL,
	[bill_total_money] [float] NULL,
	[shift_total_money] [float] NULL,
	[shift_staff_note] [nvarchar](50) NULL,
	[shift_staff_status] [int] NULL,
	[shift_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK_shift_staff] PRIMARY KEY CLUSTERED 
(
	[shift_staff_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[shifts]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[shifts](
	[shift_id] [uniqueidentifier] NOT NULL,
	[shift_code] [nvarchar](50) NULL,
	[shift_start_time] [datetime] NULL,
	[shift_end_time] [datetime] NULL,
	[create_by] [nvarchar](50) NULL,
	[shift_status] [int] NULL,
	[shift_note] [nvarchar](50) NULL,
	[staff_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK_shift] PRIMARY KEY CLUSTERED 
(
	[shift_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sizes]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sizes](
	[size_id] [uniqueidentifier] NOT NULL,
	[size_code] [varchar](20) NULL,
	[size_name] [nvarchar](50) NULL,
	[size_length] [nvarchar](100) NULL,
	[size_width] [nvarchar](100) NULL,
	[size_height] [nvarchar](100) NULL,
	[size_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[size_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[staffs]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[staffs](
	[staff_id] [uniqueidentifier] NOT NULL,
	[user_id] [uniqueidentifier] NULL,
	[staff_status] [int] NULL,
 CONSTRAINT [PK_staff] PRIMARY KEY CLUSTERED 
(
	[staff_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[types]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[types](
	[type_id] [uniqueidentifier] NOT NULL,
	[type_code] [varchar](20) NULL,
	[type_name] [nvarchar](50) NULL,
	[type_status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[user_id] [uniqueidentifier] NOT NULL,
	[full_name] [nvarchar](30) NULL,
	[birthday] [date] NULL,
	[account] [nvarchar](50) NULL,
	[password] [nvarchar](100) NULL,
	[phone_number] [nvarchar](20) NULL,
	[email] [nvarchar](100) NULL,
	[user_status] [int] NULL,
	[gender] [bit] NULL,
	[role_id] [uniqueidentifier] NULL,
	[address] [nvarchar](100) NULL,
	[user_note] [nvarchar](100) NULL,
 CONSTRAINT [PK__user__3213E83FBB77C5D3] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher_bills]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher_bills](
	[voucher_bill_id] [uniqueidentifier] NOT NULL,
	[customer_id] [uniqueidentifier] NULL,
	[voucher_id] [uniqueidentifier] NULL,
	[bill_id] [uniqueidentifier] NULL,
	[before_price] [float] NULL,
	[after_price] [float] NULL,
	[discount_price] [float] NULL,
	[create_date] [datetime] NULL,
 CONSTRAINT [PK_voucher_bill] PRIMARY KEY CLUSTERED 
(
	[voucher_bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[vouchers]    Script Date: 07/11/2023 4:53:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vouchers](
	[voucher_id] [uniqueidentifier] NOT NULL,
	[voucher_code] [nvarchar](50) NULL,
	[voucher_name] [nvarchar](50) NULL,
	[discount_price] [int] NULL,
	[voucher_create_date] [datetime] NULL,
	[voucher_type] [nvarchar](50) NULL,
	[points_to_receive] [int] NULL,
	[payment_type] [nvarchar](50) NULL,
	[voucher_amount] [int] NULL,
	[voucher_start_time] [datetime] NULL,
	[voucher_end_time] [datetime] NULL,
	[voucher_note] [nvarchar](50) NULL,
	[voucher_status] [int] NULL,
	[voucher_bill_id] [uniqueidentifier] NULL,
 CONSTRAINT [PK_voucher] PRIMARY KEY CLUSTERED 
(
	[voucher_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[bill_details] ADD  CONSTRAINT [DF_bill_detail_id]  DEFAULT (newid()) FOR [bill_detail_id]
GO
ALTER TABLE [dbo].[bills] ADD  CONSTRAINT [DF_bill_id]  DEFAULT (newid()) FOR [bill_id]
GO
ALTER TABLE [dbo].[buckle_types] ADD  CONSTRAINT [DF_buckle_type_id]  DEFAULT (newid()) FOR [buckle_type_id]
GO
ALTER TABLE [dbo].[cart_details] ADD  CONSTRAINT [DF_cart_detail_cart_id]  DEFAULT (newid()) FOR [cart_id]
GO
ALTER TABLE [dbo].[carts] ADD  CONSTRAINT [DF_cart_id]  DEFAULT (newid()) FOR [cart_id]
GO
ALTER TABLE [dbo].[colors] ADD  CONSTRAINT [DF_color_id]  DEFAULT (newid()) FOR [color_id]
GO
ALTER TABLE [dbo].[compartments] ADD  CONSTRAINT [DF_compartment_id]  DEFAULT (newid()) FOR [compartment_id]
GO
ALTER TABLE [dbo].[customers] ADD  CONSTRAINT [DF_customer_id]  DEFAULT (newid()) FOR [customer_id]
GO
ALTER TABLE [dbo].[history_shift_bill] ADD  CONSTRAINT [DF_history_shift_bill_id]  DEFAULT (newid()) FOR [history_shift_bill_id]
GO
ALTER TABLE [dbo].[images] ADD  CONSTRAINT [DF_image_id]  DEFAULT (newid()) FOR [image_id]
GO
ALTER TABLE [dbo].[materials] ADD  CONSTRAINT [DF_material_id]  DEFAULT (newid()) FOR [material_id]
GO
ALTER TABLE [dbo].[producers] ADD  CONSTRAINT [DF_producer_id]  DEFAULT (newid()) FOR [producer_id]
GO
ALTER TABLE [dbo].[product_details] ADD  CONSTRAINT [DF_balo_detail_id]  DEFAULT (newid()) FOR [product_detail_id]
GO
ALTER TABLE [dbo].[products] ADD  CONSTRAINT [DF_balo_id]  DEFAULT (newid()) FOR [product_id]
GO
ALTER TABLE [dbo].[roles] ADD  CONSTRAINT [DF_role_id]  DEFAULT (newid()) FOR [role_id]
GO
ALTER TABLE [dbo].[shift_staffs] ADD  CONSTRAINT [DF_shift_staff_id]  DEFAULT (newid()) FOR [shift_staff_id]
GO
ALTER TABLE [dbo].[shifts] ADD  CONSTRAINT [DF_shift_id]  DEFAULT (newid()) FOR [shift_id]
GO
ALTER TABLE [dbo].[sizes] ADD  CONSTRAINT [DF_size_id]  DEFAULT (newid()) FOR [size_id]
GO
ALTER TABLE [dbo].[staffs] ADD  CONSTRAINT [DF_staff_id]  DEFAULT (newid()) FOR [staff_id]
GO
ALTER TABLE [dbo].[types] ADD  CONSTRAINT [DF_type_id]  DEFAULT (newid()) FOR [type_id]
GO
ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_user_id]  DEFAULT (newid()) FOR [user_id]
GO
ALTER TABLE [dbo].[voucher_bills] ADD  CONSTRAINT [DF_voucher_bill_id]  DEFAULT (newid()) FOR [voucher_bill_id]
GO
ALTER TABLE [dbo].[vouchers] ADD  CONSTRAINT [DF_voucher_id]  DEFAULT (newid()) FOR [voucher_id]
GO
ALTER TABLE [dbo].[bill_details]  WITH CHECK ADD  CONSTRAINT [FK_bill_detail_balo_detail] FOREIGN KEY([product_detail_id])
REFERENCES [dbo].[product_details] ([product_detail_id])
GO
ALTER TABLE [dbo].[bill_details] CHECK CONSTRAINT [FK_bill_detail_balo_detail]
GO
ALTER TABLE [dbo].[bill_details]  WITH CHECK ADD  CONSTRAINT [FK_bill_detail_bill] FOREIGN KEY([bill_id])
REFERENCES [dbo].[bills] ([bill_id])
GO
ALTER TABLE [dbo].[bill_details] CHECK CONSTRAINT [FK_bill_detail_bill]
GO
ALTER TABLE [dbo].[bills]  WITH CHECK ADD  CONSTRAINT [FK_bill_customer] FOREIGN KEY([customer_id])
REFERENCES [dbo].[customers] ([customer_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[bills] CHECK CONSTRAINT [FK_bill_customer]
GO
ALTER TABLE [dbo].[bills]  WITH CHECK ADD  CONSTRAINT [FK_bill_staff] FOREIGN KEY([staff_id])
REFERENCES [dbo].[staffs] ([staff_id])
GO
ALTER TABLE [dbo].[bills] CHECK CONSTRAINT [FK_bill_staff]
GO
ALTER TABLE [dbo].[bills]  WITH CHECK ADD  CONSTRAINT [FK_bill_voucher] FOREIGN KEY([voucher_id])
REFERENCES [dbo].[vouchers] ([voucher_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[bills] CHECK CONSTRAINT [FK_bill_voucher]
GO
ALTER TABLE [dbo].[cart_details]  WITH CHECK ADD  CONSTRAINT [FK_cart_detail_balo_detail] FOREIGN KEY([product_detail_id])
REFERENCES [dbo].[product_details] ([product_detail_id])
GO
ALTER TABLE [dbo].[cart_details] CHECK CONSTRAINT [FK_cart_detail_balo_detail]
GO
ALTER TABLE [dbo].[cart_details]  WITH CHECK ADD  CONSTRAINT [FK_cart_detail_cart] FOREIGN KEY([cart_id])
REFERENCES [dbo].[carts] ([cart_id])
GO
ALTER TABLE [dbo].[cart_details] CHECK CONSTRAINT [FK_cart_detail_cart]
GO
ALTER TABLE [dbo].[carts]  WITH CHECK ADD  CONSTRAINT [FK_cart_customer] FOREIGN KEY([customer_id])
REFERENCES [dbo].[customers] ([customer_id])
GO
ALTER TABLE [dbo].[carts] CHECK CONSTRAINT [FK_cart_customer]
GO
ALTER TABLE [dbo].[customers]  WITH CHECK ADD  CONSTRAINT [FK_customer_user] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[customers] CHECK CONSTRAINT [FK_customer_user]
GO
ALTER TABLE [dbo].[history_shift_bill]  WITH CHECK ADD  CONSTRAINT [FK_history_shift_bill_shift_staff] FOREIGN KEY([shift_staff_id])
REFERENCES [dbo].[shift_staffs] ([shift_staff_id])
GO
ALTER TABLE [dbo].[history_shift_bill] CHECK CONSTRAINT [FK_history_shift_bill_shift_staff]
GO
ALTER TABLE [dbo].[images]  WITH CHECK ADD  CONSTRAINT [FK_images_products] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([product_id])
GO
ALTER TABLE [dbo].[images] CHECK CONSTRAINT [FK_images_products]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_buckle_type] FOREIGN KEY([buckle_type_id])
REFERENCES [dbo].[buckle_types] ([buckle_type_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_buckle_type]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_color] FOREIGN KEY([color_id])
REFERENCES [dbo].[colors] ([color_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_color]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_compartment] FOREIGN KEY([compartment_id])
REFERENCES [dbo].[compartments] ([compartment_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_compartment]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_material] FOREIGN KEY([material_id])
REFERENCES [dbo].[materials] ([material_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_material]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_producer] FOREIGN KEY([producer_id])
REFERENCES [dbo].[producers] ([producer_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_producer]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_product] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([product_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_product]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_size] FOREIGN KEY([size_id])
REFERENCES [dbo].[sizes] ([size_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_size]
GO
ALTER TABLE [dbo].[product_details]  WITH CHECK ADD  CONSTRAINT [FK_product_detail_type] FOREIGN KEY([type_id])
REFERENCES [dbo].[types] ([type_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[product_details] CHECK CONSTRAINT [FK_product_detail_type]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_balo_brand] FOREIGN KEY([brand_id])
REFERENCES [dbo].[brands] ([brand_id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_balo_brand]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_products] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([product_id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_products]
GO
ALTER TABLE [dbo].[shift_staffs]  WITH CHECK ADD  CONSTRAINT [FK_shift_staff_shift] FOREIGN KEY([shift_id])
REFERENCES [dbo].[shifts] ([shift_id])
GO
ALTER TABLE [dbo].[shift_staffs] CHECK CONSTRAINT [FK_shift_staff_shift]
GO
ALTER TABLE [dbo].[shifts]  WITH CHECK ADD  CONSTRAINT [FK_shift_staff] FOREIGN KEY([staff_id])
REFERENCES [dbo].[staffs] ([staff_id])
GO
ALTER TABLE [dbo].[shifts] CHECK CONSTRAINT [FK_shift_staff]
GO
ALTER TABLE [dbo].[staffs]  WITH CHECK ADD  CONSTRAINT [FK_staff_user] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[staffs] CHECK CONSTRAINT [FK_staff_user]
GO
ALTER TABLE [dbo].[users]  WITH CHECK ADD  CONSTRAINT [FK_userInfo_role] FOREIGN KEY([role_id])
REFERENCES [dbo].[roles] ([role_id])
GO
ALTER TABLE [dbo].[users] CHECK CONSTRAINT [FK_userInfo_role]
GO
ALTER TABLE [dbo].[voucher_bills]  WITH CHECK ADD  CONSTRAINT [FK_voucher_bill_bill] FOREIGN KEY([bill_id])
REFERENCES [dbo].[bills] ([bill_id])
GO
ALTER TABLE [dbo].[voucher_bills] CHECK CONSTRAINT [FK_voucher_bill_bill]
GO
ALTER TABLE [dbo].[voucher_bills]  WITH CHECK ADD  CONSTRAINT [FK_voucher_bill_customer] FOREIGN KEY([customer_id])
REFERENCES [dbo].[customers] ([customer_id])
GO
ALTER TABLE [dbo].[voucher_bills] CHECK CONSTRAINT [FK_voucher_bill_customer]
GO
ALTER TABLE [dbo].[voucher_bills]  WITH CHECK ADD  CONSTRAINT [FK_voucher_bill_voucher] FOREIGN KEY([voucher_id])
REFERENCES [dbo].[vouchers] ([voucher_id])
GO
ALTER TABLE [dbo].[voucher_bills] CHECK CONSTRAINT [FK_voucher_bill_voucher]
GO
