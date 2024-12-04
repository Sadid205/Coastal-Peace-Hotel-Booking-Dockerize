# Generated by Django 5.1.3 on 2024-12-03 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0039_alter_transaction_transaction_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_types',
            field=models.CharField(choices=[('Deposit', 'Deposit'), ('Booking', 'Booking'), ('Failed', 'Failed'), ('Cancelled', 'Cancelled')], default='Deposit', max_length=20),
        ),
    ]