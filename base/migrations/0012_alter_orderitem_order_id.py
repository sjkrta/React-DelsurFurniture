# Generated by Django 4.0.4 on 2022-04-23 06:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_delete_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='order_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orderItem', to='base.order'),
        ),
    ]