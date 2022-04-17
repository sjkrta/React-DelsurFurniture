# Generated by Django 4.0.4 on 2022-04-17 16:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_alter_categoryproduct_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category_product_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='base.categoryproduct'),
        ),
    ]
